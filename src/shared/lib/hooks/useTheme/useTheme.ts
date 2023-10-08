import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localstorage";
import { Theme } from "../../../const/theme";
import { ThemeContext } from "../../context/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.COLOR;
        break;
      case Theme.COLOR:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
        break;
    }
    // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};
