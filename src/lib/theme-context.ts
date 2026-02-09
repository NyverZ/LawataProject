import { createContext, useContext } from "react";
import type { ThemeProviderState } from "./theme-types";

export const ThemeProviderContext = createContext<ThemeProviderState | null>(
  null
);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
