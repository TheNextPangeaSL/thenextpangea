/**
 * Structured data (JSON-LD) schema builders for SEO.
 *
 * Each function returns a plain object ready to be serialized as JSON-LD.
 * These follow https://schema.org specifications and Google's
 * structured data guidelines.
 */

const SITE_URL = "https://bacsi.thenextpangea.com";
const ORG_NAME = "TheNextPangea S.L.";
const ORG_LOGO = `${SITE_URL}/Logo/TNP_logo_WHITE.png`;

// ─── Organization ──────────────────────────────────────────────
/** Global Organization schema — included on every page. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: ORG_LOGO,
    },
    sameAs: [
      "https://www.linkedin.com/company/thenextpangea",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@thenextpangea.com",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Asturias",
      addressCountry: "ES",
    },
  };
}

// ─── WebSite ───────────────────────────────────────────────────
/** WebSite schema — homepage only. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: ORG_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "es",
  };
}

// ─── BreadcrumbList ────────────────────────────────────────────
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** BreadcrumbList schema for any page with breadcrumbs. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Product ───────────────────────────────────────────────────
export interface ProductSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
  brand?: string;
}

/** Product schema for individual product pages. */
export function productSchema(input: ProductSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.image && { image: input.image }),
    ...(input.category && { category: input.category }),
    brand: {
      "@type": "Organization",
      name: input.brand ?? ORG_NAME,
      "@id": `${SITE_URL}/#organization`,
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

// ─── ContactPage ───────────────────────────────────────────────
/** ContactPage schema for the /contacto/ page. */
export function contactPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto",
    url,
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
