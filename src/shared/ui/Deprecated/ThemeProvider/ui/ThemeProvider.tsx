import { useJsonSettingByKey } from "entities/User";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "shared/const/localstorage";
import { Theme } from "../../../../const/theme";
import { ThemeContext } from "../../../../lib/context/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;

  const defaultTheme = useJsonSettingByKey("theme") as Theme;

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT
  );
  const [inited, setInited] = useState(false);

  useEffect(() => {
    if (!inited && defaultTheme) {
      setTheme(defaultTheme);
      setInited(true);
    }
  }, [defaultTheme, inited]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
