import { useTranslation } from "react-i18next";

export default function Watchlist() {
     const { t } = useTranslation();

     return (
          <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">
                    {t("pages.watchlist.title")}
               </h1>
          </section>
     );
}
