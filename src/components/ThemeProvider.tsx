import { useEffect, useState } from "react";
import { ThemeProviderContext } from "./theme-context";
import type { Theme, ThemeProviderProps } from "./theme-types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.classList.add(appliedTheme);
    root.style.colorScheme = appliedTheme;
  }, [theme]);


  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
