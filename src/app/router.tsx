import {
     createHashRouter,
     RouterProvider,
     useRouteError,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppShell } from "@/components/layout/AppShell";

function RouteLoadingFallback() {
     const { t } = useTranslation();

     return (
          <div
               aria-live="polite"
               className="flex min-h-48 items-center justify-center text-sm text-muted-foreground"
               role="status"
          >
               {t("common.loadingPage")}
          </div>
     );
}

function RouteErrorFallback() {
     const error = useRouteError();
     const { t } = useTranslation();

     useEffect(() => {
          console.error("Application route error:", error);
     }, [error]);

     return (
          <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background p-6 text-foreground">
               <h1 className="text-lg font-semibold">
                    {t("common.somethingWentWrong")}
               </h1>
               <button
                    className="rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.location.reload()}
                    type="button"
               >
                    {t("common.tryAgain")}
               </button>
          </main>
     );
}

const router = createHashRouter([
     {
          path: "/",
          element: <AppShell />,
          HydrateFallback: RouteLoadingFallback,
          children: [
               {
                    index: true,
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/home/pages/Home"
                         );
                         return { Component };
                    },
               },
               {
                    path: "movies",
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/movies/pages/Movies"
                         );
                         return { Component };
                    },
               },
               {
                    path: "movies/:id",
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/movies/pages/MovieDetails"
                         );
                         return { Component };
                    },
               },
               {
                    path: "search",
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/search/pages/Search"
                         );
                         return { Component };
                    },
               },
               {
                    path: "watchlist",
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/watchlist/pages/Watchlist"
                         );
                         return { Component };
                    },
               },
               {
                    path: "settings",
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/settings/pages/Settings"
                         );
                         return { Component };
                    },
               },
               {
                    path: "*",
                    errorElement: <RouteErrorFallback />,
                    lazy: async () => {
                         const { default: Component } = await import(
                              "@/features/not-found/pages/NotFound"
                         );
                         return { Component };
                    },
               },
          ],
     },
]);

export function AppRouter() {
     return <RouterProvider router={router} />;
}
