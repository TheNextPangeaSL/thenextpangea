// Generate a default OG image for TheNextPangea
// Run: node scripts/generate-og-image.mjs

import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

// Create an SVG with TNP branding
const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A1628;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#132240;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4BA3E3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6BC1FF;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Subtle grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.04)" />
  </pattern>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

  <!-- Accent line at top -->
  <rect x="0" y="0" width="${WIDTH}" height="4" fill="url(#accent)" />

  <!-- Company name -->
  <text x="600" y="260" font-family="system-ui, -apple-system, Arial, sans-serif" font-size="56" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">
    TheNextPangea
  </text>

  <!-- Tagline -->
  <text x="600" y="330" font-family="system-ui, -apple-system, Arial, sans-serif" font-size="24" font-weight="400" fill="rgba(255,255,255,0.65)" text-anchor="middle">
    Expertos en Tecnologías eXponenciales
  </text>

  <!-- Separator line -->
  <rect x="500" y="370" width="200" height="2" fill="url(#accent)" rx="1" />

  <!-- Technologies -->
  <text x="600" y="420" font-family="system-ui, -apple-system, Arial, sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.45)" text-anchor="middle" letter-spacing="3">
    IA · BIG DATA · FABRICACIÓN AVANZADA · NANOTECNOLOGÍA · BIOTECNOLOGÍA
  </text>

  <!-- Domain -->
  <text x="600" y="580" font-family="system-ui, -apple-system, Arial, sans-serif" font-size="18" font-weight="400" fill="rgba(75,163,227,0.7)" text-anchor="middle">
    thenextpangea.com
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og/og-default.png");

console.log("Generated public/og/og-default.png (1200x630)");
