import type { Theme } from "@/types/theme";

export function resolveTheme(
     theme: Theme,
     systemTheme: Exclude<Theme, "system">,
): Exclude<Theme, "system"> {
     return theme === "system" ? systemTheme : theme;
}
