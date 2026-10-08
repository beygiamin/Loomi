import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/config/theme.config";
import { resolveTheme } from "@/config/theme.utils";
import type { Theme } from "@/types/theme";
import { useSystemTheme } from "@/hooks/useSystemTheme";
import { ThemeContext } from "./theme-context";

type ThemeProviderProps = {
     children: React.ReactNode;
     defaultTheme?: Theme;
     storageKey?: string;
};

export function ThemeProvider({
     children,
     defaultTheme = DEFAULT_THEME,
     storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
     const systemTheme = useSystemTheme();
     const [theme, setThemeState] = useState<Theme>(() => {
          const savedTheme = localStorage.getItem(storageKey);

          return savedTheme === "light" ||
               savedTheme === "dark" ||
               savedTheme === "system"
               ? savedTheme
               : defaultTheme;
     });

     useEffect(() => {
          const root = document.documentElement;
          const resolvedTheme = resolveTheme(theme, systemTheme);

          root.classList.remove("light", "dark");
          root.classList.add(resolvedTheme);
          root.style.colorScheme = resolvedTheme;
     }, [theme, systemTheme]);

     const setTheme = (nextTheme: Theme) => {
          localStorage.setItem(storageKey, nextTheme);
          setThemeState(nextTheme);
     };

     return (
          <ThemeContext.Provider value={{ theme, setTheme }}>
               {children}
          </ThemeContext.Provider>
     );
}
