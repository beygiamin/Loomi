import { Link } from "react-router-dom";

export default function NotFound() {
     return (
          <section className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-4 py-8 sm:px-6 lg:px-8">
               <h1 className="text-xl font-semibold">Page not found</h1>
               <Link
                    className="text-sm text-primary underline-offset-4 hover:underline"
                    to="/"
               >
                    Go back home
               </Link>
          </section>
     );
}
