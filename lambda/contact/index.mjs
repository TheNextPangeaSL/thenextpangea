/**
 * Contact form handler — receives the form from the static site (GitHub Pages)
 * and delivers it over SMTP through Amazon SES.
 *
 * Deploy as a Lambda with a Function URL (auth type NONE). The browser posts
 * here directly; the SMTP password never leaves AWS.
 *
 * Required environment variables (set in the Lambda console):
 *   SMTP_HOST       email-smtp.eu-west-3.amazonaws.com
 *   SMTP_PORT       587
 *   SMTP_USER       SES SMTP username (starts with AKIA...)
 *   SMTP_PASS       SES SMTP password  <- see README: use Secrets Manager
 *   MAIL_FROM       iam@thenextpangea.com  (must be verified in SES)
 *   MAIL_TO         contact@thenextpangea.com
 *   ALLOWED_ORIGIN  https://bacsi.thenextpangea.com
 */

import nodemailer from "nodemailer";

// Built once per container so warm invocations reuse the connection.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false, // port 587 starts plain and upgrades
  requireTLS: true, // ...but refuse to send if STARTTLS fails
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Defaults kept in code so a missing env var cannot silently misroute the
// mail. Override them in the Lambda console only to change the destination.
const MAIL_TO = process.env.MAIL_TO || "contact@thenextpangea.com";
const MAIL_FROM = process.env.MAIL_FROM || "iam@thenextpangea.com";
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;

// Subject values the form is allowed to send, mapped to a readable label.
const SUBJECTS = {
  explore: "Explorar capacidades",
  demo: "Solicitar demo",
  bacsi: "BACSI 2026",
  rd: "Colaboración I+D",
};

const LIMITS = { name: 120, email: 254, company: 160, message: 5000 };

// Best-effort throttle. Lambda containers are per-instance and short-lived, so
// this slows down casual abuse but is not a real rate limiter — put AWS WAF in
// front of the Function URL if the endpoint starts attracting traffic.
const recentByIp = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function cors(extra = {}) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN ?? "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    ...extra,
  };
}

function reply(statusCode, body) {
  return {
    statusCode,
    headers: cors({ "Content-Type": "application/json" }),
    body: JSON.stringify(body),
  };
}

// The visitor's text lands inside an HTML email; escape it so a message can't
// inject markup into the mail we read.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Header injection guard for anything that goes into an address header.
function isSafeHeaderValue(value) {
  return !/[\r\n]/.test(value);
}

function throttled(ip) {
  if (!ip) return false;
  const now = Date.now();
  const hits = (recentByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recentByIp.set(ip, hits);
  if (recentByIp.size > 1000) recentByIp.clear();
  return hits.length > MAX_PER_WINDOW;
}

export const handler = async (event) => {
  const method =
    event?.requestContext?.http?.method ?? event?.httpMethod ?? "POST";

  if (method === "OPTIONS") return { statusCode: 204, headers: cors() };
  if (method !== "POST") return reply(405, { error: "method_not_allowed" });

  // Function URLs do not enforce CORS server-side, so check Origin ourselves.
  const origin = event?.headers?.origin ?? event?.headers?.Origin;
  if (ALLOWED_ORIGIN && origin && origin !== ALLOWED_ORIGIN) {
    return reply(403, { error: "forbidden_origin" });
  }

  const ip = event?.requestContext?.http?.sourceIp;
  if (throttled(ip)) return reply(429, { error: "rate_limited" });

  let payload;
  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString("utf8")
      : event.body;
    payload = JSON.parse(raw ?? "{}");
  } catch {
    return reply(400, { error: "invalid_json" });
  }

  // Honeypot: a hidden field no human fills in. Report success so bots that
  // trip it do not learn they were filtered.
  if (payload.website) return reply(200, { ok: true });

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const company = String(payload.company ?? "").trim();
  const subject = String(payload.subject ?? "").trim();
  const message = String(payload.message ?? "").trim();

  const invalid =
    !name ||
    !email ||
    !message ||
    !SUBJECTS[subject] ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !isSafeHeaderValue(email) ||
    !isSafeHeaderValue(name) ||
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message;

  if (invalid) return reply(400, { error: "invalid_payload" });

  const subjectLabel = SUBJECTS[subject];
  const rows = [
    ["Nombre", name],
    ["Email", email],
    ["Empresa", company || "—"],
    ["Asunto", subjectLabel],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:14px;color:#1a2b4c">
      <h2 style="margin:0 0 16px">Nuevo mensaje desde bacsi.thenextpangea.com</h2>
      <table cellpadding="6" style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#64748b">${label}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <div style="white-space:pre-wrap;padding:16px;background:#f8fafc;border-radius:8px">${escapeHtml(message)}</div>
    </div>`;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      // Replying in the mail client answers the visitor directly.
      replyTo: email,
      subject: `Web - BACSI - ${subjectLabel}`,
      text,
      html,
    });
  } catch (err) {
    // Never log err verbatim at info level: SMTP errors can echo credentials.
    console.error("SMTP send failed:", err?.code ?? err?.message ?? "unknown");
    return reply(502, { error: "send_failed" });
  }

  return reply(200, { ok: true });
};
