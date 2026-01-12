import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useTheme } from "@/components/theme-context";

function ShowTheme() {
  const { theme } = useTheme();
  return <div data-testid="theme">{theme}</div>;
}

test("defaultTheme dipakai", () => {
  const { getByTestId } = render(
    <ThemeProvider defaultTheme="system">
      <ShowTheme />
    </ThemeProvider>
  );

  expect(getByTestId("theme").textContent).toBe("system");
});
