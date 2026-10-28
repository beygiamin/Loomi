import { AppProviders } from "@/app/providers/AppProviders";
import { ErrorBoundary } from "@/app/ErrorBoundary";
import { AppRouter } from "@/app/router";

export function App() {
     return (
          <AppProviders>
               <ErrorBoundary>
                    <AppRouter />
               </ErrorBoundary>
          </AppProviders>
     );
}
