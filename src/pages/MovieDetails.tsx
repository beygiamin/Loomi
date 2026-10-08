import { useParams } from "react-router-dom";

export default function MovieDetails() {
     const { id } = useParams<{ id: string }>();

     return (
          <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">Movie Details</h1>
               <p className="mt-4 text-sm text-muted-foreground">
                    Movie ID: {id}
               </p>
          </section>
     );
}
