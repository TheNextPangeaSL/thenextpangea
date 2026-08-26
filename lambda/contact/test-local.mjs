/**
 * Local smoke test — sends one real email through SES without deploying.
 *
 *   cd lambda/contact
 *   npm install
 *   cp .env.example .env   # fill in SMTP_USER / SMTP_PASS
 *   node --env-file=.env test-local.mjs
 *
 * Requires Node 20.6+ for --env-file.
 */

import { handler } from "./index.mjs";

const required = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(`Missing env vars: ${missing.join(", ")}`);
  console.error("Did you run with --env-file=.env ?");
  process.exit(1);
}

const event = {
  requestContext: { http: { method: "POST", sourceIp: "127.0.0.1" } },
  headers: { origin: process.env.ALLOWED_ORIGIN },
  body: JSON.stringify({
    name: "Prueba local",
    email: "prueba@example.com",
    company: "The Next Pangea",
    subject: "demo",
    message: "Mensaje de prueba enviado desde test-local.mjs.",
    website: "", // honeypot left empty, as a human would
  }),
};

const result = await handler(event);
console.log("status:", result.statusCode);
console.log("body:  ", result.body);

if (result.statusCode === 200) {
  console.log(`\nEnviado. Revisa la bandeja de ${process.env.MAIL_TO}.`);
} else {
  console.log("\nNo se envió. Revisa el error de arriba y los logs.");
  process.exitCode = 1;
}
