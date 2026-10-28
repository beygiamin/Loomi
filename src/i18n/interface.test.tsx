import { cleanup, render, screen } from "@testing-library/react";
import {
     MemoryRouter,
     Route,
     Routes,
} from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ThemeContext } from "@/app/providers/theme-context";
import { Navbar } from "@/components/layout/Navbar";
import Home from "@/features/home/pages/Home";
import MovieDetails from "@/features/movies/pages/MovieDetails";
import Movies from "@/features/movies/pages/Movies";
import NotFound from "@/features/not-found/pages/NotFound";
import Search from "@/features/search/pages/Search";
import Watchlist from "@/features/watchlist/pages/Watchlist";
import { changeAppLanguage, DEFAULT_LOCALE } from "./index";

const localizedPages = [
     { path: "/", title: "خانه", englishTitle: "Home", element: <Home /> },
     {
          path: "/movies",
          title: "فیلم‌ها",
          englishTitle: "Movies",
          element: <Movies />,
     },
     {
          path: "/movies/:id",
          title: "جزئیات فیلم",
          englishTitle: "Movie details",
          element: <MovieDetails />,
          initialEntry: "/movies/42",
     },
     {
          path: "/search",
          title: "جستجو",
          englishTitle: "Search",
          element: <Search />,
     },
     {
          path: "/watchlist",
          title: "فهرست تماشا",
          englishTitle: "Watchlist",
          element: <Watchlist />,
     },
     {
          path: "*",
          title: "صفحه پیدا نشد",
          englishTitle: "Page not found",
          element: <NotFound />,
          initialEntry: "/missing",
     },
];

describe("localized MVP interface", () => {
     beforeEach(async () => {
          await changeAppLanguage(DEFAULT_LOCALE);
     });

     afterEach(async () => {
          cleanup();
          await changeAppLanguage(DEFAULT_LOCALE);
     });

     it("translates navigation into English", async () => {
          await changeAppLanguage("en");

          render(
               <ThemeContext.Provider
                    value={{ theme: "system", setTheme: () => undefined }}
               >
                    <MemoryRouter>
                         <Navbar />
                    </MemoryRouter>
               </ThemeContext.Provider>,
          );

          expect(
               screen.getByRole("navigation", { name: "Main navigation" }),
          ).toBeTruthy();
          expect(screen.getByRole("link", { name: "Home" })).toBeTruthy();
          expect(screen.getByRole("link", { name: "Movies" })).toBeTruthy();
          expect(screen.getByRole("link", { name: "Search" })).toBeTruthy();
          expect(
               screen.getByRole("link", { name: "Watchlist" }),
          ).toBeTruthy();
          expect(screen.getByRole("link", { name: "Settings" })).toBeTruthy();
     });

     it("translates navigation and implemented pages into Persian", async () => {
          await changeAppLanguage("fa");

          render(
               <ThemeContext.Provider
                    value={{ theme: "system", setTheme: () => undefined }}
               >
                    <MemoryRouter>
                         <Navbar />
                    </MemoryRouter>
               </ThemeContext.Provider>,
          );

          expect(
               screen.getByRole("navigation", { name: "پیمایش اصلی" }),
          ).toBeTruthy();
          expect(screen.getByRole("link", { name: "خانه" })).toBeTruthy();
          expect(screen.getByRole("link", { name: "فیلم‌ها" })).toBeTruthy();
          expect(screen.getByRole("link", { name: "جستجو" })).toBeTruthy();
          expect(
               screen.getByRole("link", { name: "فهرست تماشا" }),
          ).toBeTruthy();
          expect(screen.getByRole("link", { name: "تنظیمات" })).toBeTruthy();
     });

     it.each(localizedPages)(
          "translates the page at $path and preserves dynamic identifiers",
          async ({ path, initialEntry, title, element }) => {
               await changeAppLanguage("fa");
               render(
                    <MemoryRouter initialEntries={[initialEntry ?? path]}>
                         <Routes>
                              <Route path={path} element={element} />
                         </Routes>
                    </MemoryRouter>,
               );

               expect(
                    screen.getByRole("heading", { name: title }),
               ).toBeTruthy();

               if (path === "/movies/:id") {
                    expect(screen.getByText("42").getAttribute("dir")).toBe(
                         "ltr",
                    );
               }
          },
     );

     it.each(localizedPages)(
          "shows the English page title at $path",
          async ({ path, initialEntry, englishTitle, element }) => {
               await changeAppLanguage("en");
               render(
                    <MemoryRouter initialEntries={[initialEntry ?? path]}>
                         <Routes>
                              <Route path={path} element={element} />
                         </Routes>
                    </MemoryRouter>,
               );

               expect(
                    screen.getByRole("heading", { name: englishTitle }),
               ).toBeTruthy();

               if (path === "/movies/:id") {
                    expect(screen.getByText("42").getAttribute("dir")).toBe(
                         "ltr",
                    );
               }
          },
     );
});
