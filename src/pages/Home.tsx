import { MovieGrid } from "@/components/MovieGrid";

export default function Home() {
     return (
          <>
               <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold">Home</h1>
               </section>
               <MovieGrid />
          </>
     );
}
