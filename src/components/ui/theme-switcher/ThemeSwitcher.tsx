import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from "../DropDown";

export function ThemeSwitcher() {
     const { setTheme } = useTheme();
     const { t } = useTranslation();

     return (
          <DropdownMenu>
               <DropdownMenuTrigger
                    render={props => (
                         <Button variant="outline" size="icon" {...props}>
                              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                              <span className="sr-only">
                                   {t("common.toggleTheme")}
                              </span>
                         </Button>
                    )}
               />
               <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                         <Sun aria-hidden="true" />
                         {t("common.light")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                         <Moon aria-hidden="true" />
                         {t("common.dark")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                         <Monitor aria-hidden="true" />
                         {t("common.system")}
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
     );
}
