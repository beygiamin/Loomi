import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

export type Locale = keyof typeof resources;

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "loomi.locale";

export function resolveInitialLocale(value: string | null): Locale {
     return value === "en" || value === "fa" ? value : DEFAULT_LOCALE;
}

function readInitialLocale(): Locale {
     try {
          return resolveInitialLocale(
               window.localStorage.getItem(LOCALE_STORAGE_KEY),
          );
     } catch (error) {
          console.error("Unable to read the saved language preference:", error);
          return DEFAULT_LOCALE;
     }
}

const initialLocale = readInitialLocale();

void i18n.use(initReactI18next).init({
     resources,
     lng: initialLocale,
     fallbackLng: DEFAULT_LOCALE,
     supportedLngs: ["en", "fa"],
     defaultNS: "translation",
     ns: ["translation"],
     interpolation: {
          escapeValue: false,
     },
     initAsync: false,
     returnNull: false,
});

let activeLocale = initialLocale;
let transitionTimeout: ReturnType<typeof setTimeout> | undefined;

function updateDocumentLanguage(language: string) {
     const locale: Locale = language === "fa" ? "fa" : "en";

     if (typeof document === "undefined") {
          return;
     }

     const root = document.documentElement;
     root.lang = locale;
     root.dir = locale === "fa" ? "rtl" : "ltr";

     if (activeLocale !== locale) {
          activeLocale = locale;
          root.dataset.localeTransition = "true";

          if (transitionTimeout !== undefined) {
               clearTimeout(transitionTimeout);
          }

          transitionTimeout = setTimeout(() => {
               delete root.dataset.localeTransition;
               transitionTimeout = undefined;
          }, 220);
     }
}

updateDocumentLanguage(initialLocale);
i18n.on("languageChanged", updateDocumentLanguage);

export async function changeAppLanguage(locale: Locale): Promise<void> {
     await i18n.changeLanguage(locale);
     window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export default i18n;
