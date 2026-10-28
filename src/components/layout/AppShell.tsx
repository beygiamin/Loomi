import { Outlet, useNavigation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function AppShell() {
     const navigation = useNavigation();
     const { t } = useTranslation();

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
                              {t("common.loadingPage")}
                         </div>
                    ) : (
                         <Outlet />
                    )}
               </main>
               <Footer />
          </div>
     );
}
