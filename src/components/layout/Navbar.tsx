import { ThemeSwitcher } from "@/components/ui/theme-switcher/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export function Navbar() {
     const { t } = useTranslation();

     return (
          <nav
               aria-label={t("navigation.ariaLabel")}
               className="flex flex-wrap items-center justify-center gap-2 text-xs sm:gap-4 sm:text-sm"
          >
               <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                    <NavLink
                         className={({ isActive }) =>
                              `rounded-md px-2 py-1.5 transition-colors hover:bg-muted hover:text-foreground sm:px-3 ${
                                   isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                              }`
                         }
                         end
                         to="/"
                    >
                         {t("navigation.home")}
                    </NavLink>
                    <NavLink
                         className={({ isActive }) =>
                              `rounded-md px-2 py-1.5 transition-colors hover:bg-muted hover:text-foreground sm:px-3 ${
                                   isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                              }`
                         }
                         to="/movies"
                    >
                         {t("navigation.movies")}
                    </NavLink>
                    <NavLink
                         className={({ isActive }) =>
                              `rounded-md px-2 py-1.5 transition-colors hover:bg-muted hover:text-foreground sm:px-3 ${
                                   isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                              }`
                         }
                         to="/search"
                    >
                         {t("navigation.search")}
                    </NavLink>
                    <NavLink
                         className={({ isActive }) =>
                              `rounded-md px-2 py-1.5 transition-colors hover:bg-muted hover:text-foreground sm:px-3 ${
                                   isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                              }`
                         }
                         to="/watchlist"
                    >
                         {t("navigation.watchlist")}
                    </NavLink>
                    <NavLink
                         className={({ isActive }) =>
                              `rounded-md px-2 py-1.5 transition-colors hover:bg-muted hover:text-foreground sm:px-3 ${
                                   isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                              }`
                         }
                         to="/settings"
                    >
                         {t("navigation.settings")}
                    </NavLink>
               </div>
               <ThemeSwitcher />
          </nav>
     );
}
