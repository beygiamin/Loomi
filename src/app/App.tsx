import { AppProviders } from "@/app/providers/AppProviders";
import { ErrorBoundary } from "@/app/ErrorBoundary";
import { AppRouter } from "@/app/router";

export function App() {
     return (
          <ErrorBoundary>
               <AppProviders>
                    <AppRouter />
               </AppProviders>
          </ErrorBoundary>
     );
}
