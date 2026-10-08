import { ThemeSwitcher } from "@/components/ui/theme-switcher/ThemeSwitcher";
import { NavLink } from "react-router-dom";

export function Navbar() {
     return (
          <nav
               aria-label="Main"
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
                         Home
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
                         Movies
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
                         Search
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
                         Watchlist
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
                         Settings
                    </NavLink>
               </div>
               <ThemeSwitcher />
          </nav>
     );
}
