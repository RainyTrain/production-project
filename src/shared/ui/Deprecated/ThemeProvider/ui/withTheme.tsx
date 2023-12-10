import { useJsonSettingByKey } from "entities/User";
import { Theme } from "shared/const/theme";
import ThemeProvider from "./ThemeProvider";

export const withTheme = (Component: React.ComponentType) => () => {
  const defaultTheme = useJsonSettingByKey("theme") as Theme;

  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <Component />
    </ThemeProvider>
  );
};
