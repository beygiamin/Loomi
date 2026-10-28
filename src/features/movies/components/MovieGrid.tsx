import { useTranslation } from "react-i18next";

export function MovieGrid() {
     const { t } = useTranslation();

     return (
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <div
                    aria-label={t("movieGrid.emptyLabel")}
                    className="grid min-h-96 grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4 rounded-lg border border-dashed border-border"
               />
          </div>
     );
}
