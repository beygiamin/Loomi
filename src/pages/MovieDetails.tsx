import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MovieDetails() {
     const { id } = useParams<{ id: string }>();
     const { t } = useTranslation();

     return (
          <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">
                    {t("pages.movieDetails.title")}
               </h1>
               <p className="mt-4 text-sm text-muted-foreground">
                    {t("pages.movieDetails.id")}{" "}
                    <bdi dir="ltr">{id}</bdi>
               </p>
          </section>
     );
}
