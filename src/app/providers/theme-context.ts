import { createContext } from "react";
import type { Theme } from "@/types/theme";

type ThemeContextValue = {
     theme: Theme;
     setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
     undefined,
);
