import { useTranslation } from "react-i18next";

export function Footer() {
     const { t } = useTranslation();

     return (
          <footer
               aria-label={t("common.footer")}
               className="min-h-16 border-t border-border"
          />
     );
}
