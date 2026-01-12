import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-context";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />

      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
