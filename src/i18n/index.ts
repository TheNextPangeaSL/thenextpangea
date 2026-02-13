import { en } from "./en";
import { es } from "./es";
import type { TranslationKey } from "./en";

export type Locale = "en" | "es";

export const translations: Record<Locale, Record<string, string>> = { en, es };

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
};

/**
 * Get a translation value for a given locale and key.
 */
export function t(locale: Locale, key: TranslationKey): string {
  return (
    translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key
  );
}

/**
 * Get the current locale from localStorage or fall back to browser language / default.
 */
export function getLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const stored = localStorage.getItem("pangea-locale");
  if (stored === "en" || stored === "es") return stored;

  const browserLang = navigator.language?.slice(0, 2);
  if (browserLang === "en") return "en";

  return defaultLocale;
}

/**
 * Persist locale choice and apply all translations to the DOM.
 * Elements should have `data-i18n="translation.key"` attributes.
 * Elements with `data-i18n-html="translation.key"` will use innerHTML.
 * Elements with `data-i18n-placeholder="translation.key"` will set placeholder.
 * The <html> lang attribute is also updated.
 */
export function setLocale(locale: Locale): void {
  if (typeof window === "undefined") return;

  localStorage.setItem("pangea-locale", locale);
  document.documentElement.lang = locale;

  // Update text content
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n") as TranslationKey;
    if (key && translations[locale]?.[key] != null) {
      el.textContent = translations[locale][key];
    }
  });

  // Update innerHTML (for content with HTML tags like <strong>, <br>, <a>)
  document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html") as TranslationKey;
    if (key && translations[locale]?.[key] != null) {
      el.innerHTML = translations[locale][key];
    }
  });

  // Update placeholders
  document
    .querySelectorAll<HTMLElement>("[data-i18n-placeholder]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder") as TranslationKey;
      if (key && translations[locale]?.[key] != null) {
        (el as HTMLInputElement).placeholder = translations[locale][key];
      }
    });

  // Update aria-label
  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria") as TranslationKey;
    if (key && translations[locale]?.[key] != null) {
      el.setAttribute("aria-label", translations[locale][key]);
    }
  });

  // Update alt attributes (for images)
  document.querySelectorAll<HTMLElement>("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt") as TranslationKey;
    if (key && translations[locale]?.[key] != null) {
      el.setAttribute("alt", translations[locale][key]);
    }
  });

  // Dispatch a custom event so components can react
  window.dispatchEvent(
    new CustomEvent("locale-changed", { detail: { locale } }),
  );

  // Update active state on language switcher buttons
  document.querySelectorAll<HTMLElement>("[data-lang-btn]").forEach((btn) => {
    const btnLocale = btn.getAttribute("data-lang-btn");
    if (btnLocale === locale) {
      btn.classList.add("active-locale");
      btn.classList.remove("inactive-locale");
    } else {
      btn.classList.remove("active-locale");
      btn.classList.add("inactive-locale");
    }
  });
}

/**
 * Initialize the i18n system. Should be called on DOMContentLoaded or astro:page-load.
 * - Reads saved/browser locale
 * - Applies all translations
 * - Wires up language switcher buttons (elements with `data-lang-btn="en|es"`)
 */
export function initI18n(): void {
  const locale = getLocale();
  setLocale(locale);

  // Bind click handlers to language switcher buttons
  document.querySelectorAll<HTMLElement>("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const newLocale = btn.getAttribute("data-lang-btn") as Locale;
      if (newLocale && (newLocale === "en" || newLocale === "es")) {
        setLocale(newLocale);
      }
    });
  });
}

export type { TranslationKey };
