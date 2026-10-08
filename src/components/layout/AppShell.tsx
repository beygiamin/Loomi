import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function AppShell() {
     const navigation = useNavigation();

     return (
          <div className="flex min-h-svh flex-col bg-background text-foreground">
               <Header />
               <main className="flex-1">
                    {navigation.state === "loading" ? (
                         <div
                              aria-live="polite"
                              className="flex min-h-48 items-center justify-center text-sm text-muted-foreground"
                              role="status"
                         >
                              Loading page…
                         </div>
                    ) : (
                         <Outlet />
                    )}
               </main>
               <Footer />
          </div>
     );
}
