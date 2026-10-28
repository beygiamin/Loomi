import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { FolderOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/Input";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/Select";
import { changeAppLanguage, type Locale } from "@/i18n";

export default function Settings() {
     const { t, i18n } = useTranslation();
     const [folderPath, setFolderPath] = useState("");
     const [error, setError] = useState<string | null>(null);
     const [languageError, setLanguageError] = useState<string | null>(null);
     const locale: Locale = i18n.resolvedLanguage === "fa" ? "fa" : "en";
     const languages = [
          { value: "en", label: t("settings.language.english") },
          { value: "fa", label: t("settings.language.persian") },
     ] satisfies { value: Locale; label: string }[];

     async function selectFolder() {
          setError(null);

          try {
               const selection = await open({
                    directory: true,
                    multiple: false,
               });

               if (typeof selection === "string") {
                    setFolderPath(selection);
               }
          } catch (error) {
               console.error("Unable to select folder:", error);
               setError(t("settings.mediaFolder.error"));
          }
     }

     async function selectLanguage(nextLocale: Locale) {
          setLanguageError(null);

          try {
               await changeAppLanguage(nextLocale);
          } catch (error) {
               console.error("Unable to save the language preference:", error);
               setLanguageError(t("settings.language.changeError"));
          }
     }

     return (
          <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">{t("settings.title")}</h1>
               <div className="mt-8 max-w-2xl">
                    <div className="mb-8">
                         <label
                              className="text-sm font-medium"
                              htmlFor="language"
                         >
                              {t("settings.language.label")}
                         </label>
                         <Select
                              items={languages}
                              onValueChange={value => {
                                   if (value === "en" || value === "fa") {
                                        void selectLanguage(value);
                                   }
                              }}
                              value={locale}
                         >
                              <SelectTrigger
                                   aria-describedby={
                                        languageError
                                             ? "language-error"
                                             : undefined
                                   }
                                   aria-invalid={Boolean(languageError)}
                                   className="mt-2 w-full max-w-xs"
                                   id="language"
                              >
                                   <SelectValue />
                              </SelectTrigger>
                              <SelectContent align="start">
                                   {languages.map(language => (
                                        <SelectItem
                                             key={language.value}
                                             value={language.value}
                                        >
                                             {language.label}
                                        </SelectItem>
                                   ))}
                              </SelectContent>
                         </Select>
                         {languageError && (
                              <p
                                   aria-live="polite"
                                   className="mt-2 text-sm text-destructive"
                                   id="language-error"
                                   role="alert"
                              >
                                   {languageError}
                              </p>
                         )}
                    </div>
                    <label
                         className="text-sm font-medium"
                         htmlFor="media-folder"
                    >
                         {t("settings.mediaFolder.label")}
                    </label>
                    <div className="mt-2 flex gap-2">
                         <Input
                              className="flex-1"
                              dir={folderPath ? "ltr" : undefined}
                              id="media-folder"
                              placeholder={t("settings.mediaFolder.empty")}
                              readOnly
                              value={folderPath}
                         />
                         <Button
                              onClick={selectFolder}
                              type="button"
                              variant="outline"
                         >
                              <FolderOpen data-icon="inline-start" />
                              {t("settings.mediaFolder.select")}
                         </Button>
                    </div>
                    {error && (
                         <p
                              aria-live="polite"
                              className="mt-2 text-sm text-destructive"
                              role="alert"
                         >
                              {error}
                         </p>
                    )}
               </div>
          </section>
     );
}
