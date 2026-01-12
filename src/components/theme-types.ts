import type { ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

export type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
