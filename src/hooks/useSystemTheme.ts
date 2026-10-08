import { isTauri } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

export type SystemTheme = "light" | "dark";

function getMediaTheme(): SystemTheme {
     return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
}

export function useSystemTheme(): SystemTheme {
     const [systemTheme, setSystemTheme] = useState<SystemTheme>(getMediaTheme);

     useEffect(() => {
          const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
          let unlisten: (() => void) | undefined;
          let disposed = false;

          const listenToMediaQuery = () => {
               const handleChange = (event: MediaQueryListEvent) => {
                    setSystemTheme(event.matches ? "dark" : "light");
               };

               mediaQuery.addEventListener("change", handleChange);
               return () =>
                    mediaQuery.removeEventListener("change", handleChange);
          };

          let unlistenMediaQuery: (() => void) | undefined;

          if (isTauri()) {
               const listenToTauriTheme = async () => {
                    const appWindow = getCurrentWindow();
                    const initialTheme = await appWindow.theme();

                    if (disposed) return;

                    setSystemTheme(initialTheme ?? getMediaTheme());
                    unlisten = await appWindow.onThemeChanged(({ payload }) => {
                         setSystemTheme(payload ?? getMediaTheme());
                    });

                    if (disposed) unlisten();
               };

               void listenToTauriTheme().catch(() => {
                    if (!disposed) {
                         setSystemTheme(getMediaTheme());
                         unlistenMediaQuery = listenToMediaQuery();
                    }
               });
          } else {
               unlistenMediaQuery = listenToMediaQuery();
          }

          return () => {
               disposed = true;
               unlisten?.();
               unlistenMediaQuery?.();
          };
     }, []);

     return systemTheme;
}
