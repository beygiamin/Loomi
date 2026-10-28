import {
     cleanup,
     render,
     screen,
     waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createInstance, type Resource } from "i18next";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Settings from "@/pages/Settings";
import {
     changeAppLanguage,
     DEFAULT_LOCALE,
     LOCALE_STORAGE_KEY,
     resolveInitialLocale,
} from "./index";

describe("i18n configuration", () => {
     beforeEach(async () => {
          await changeAppLanguage(DEFAULT_LOCALE);
          localStorage.removeItem(LOCALE_STORAGE_KEY);
     });

     afterEach(async () => {
          cleanup();
          await changeAppLanguage(DEFAULT_LOCALE);
          localStorage.clear();
          delete document.documentElement.dataset.localeTransition;
     });

     it("uses English by default and falls back for unsupported preferences", () => {
          expect(resolveInitialLocale(null)).toBe("en");
          expect(resolveInitialLocale("unsupported")).toBe("en");
          expect(resolveInitialLocale("fa-IR")).toBe("en");
          expect(resolveInitialLocale("fa")).toBe("fa");
     });

     it("updates translations and document direction and persists language changes", async () => {
          const user = userEvent.setup();
          render(<Settings />);

          expect(
               screen.getByRole("heading", { name: "Settings" }),
          ).toBeTruthy();

          await user.click(screen.getByRole("combobox", { name: "Language" }));
          await user.click(
               await screen.findByRole("option", { name: "Persian" }),
          );

          await waitFor(() => {
               expect(
                    screen.getByRole("heading", { name: "تنظیمات" }),
               ).toBeTruthy();
          });

          expect(document.documentElement.lang).toBe("fa");
          expect(document.documentElement.dir).toBe("rtl");
          expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("fa");
          expect(
               resolveInitialLocale(localStorage.getItem(LOCALE_STORAGE_KEY)),
          ).toBe("fa");

          await user.click(screen.getByRole("combobox", { name: "زبان" }));
          await user.click(
               await screen.findByRole("option", { name: "انگلیسی" }),
          );

          await waitFor(() => {
               expect(
                    screen.getByRole("heading", { name: "Settings" }),
               ).toBeTruthy();
          });

          expect(document.documentElement.lang).toBe("en");
          expect(document.documentElement.dir).toBe("ltr");
          expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("en");
     });

     it("falls back to English when a translation is missing", async () => {
          const fallbackI18n = createInstance();
          const fallbackResources: Resource = {
               en: { translation: { navigation: { home: "Home fallback" } } },
               fa: { translation: { navigation: {} } },
          };

          await fallbackI18n.init({
               lng: "fa",
               fallbackLng: "en",
               resources: fallbackResources,
               initAsync: false,
          });

          expect(fallbackI18n.t("navigation.home")).toBe("Home fallback");
     });
});
