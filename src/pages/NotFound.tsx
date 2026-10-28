import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
     const { t } = useTranslation();

     return (
          <section className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">
                    {t("pages.notFound.title")}
               </h1>
               <Link
                    className="text-sm text-primary underline-offset-4 hover:underline"
                    to="/"
               >
                    {t("pages.notFound.goBackHome")}
               </Link>
          </section>
     );
}
