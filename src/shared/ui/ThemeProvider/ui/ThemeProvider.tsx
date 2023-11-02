import { useJsonSettingByKey } from "entities/User";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Theme } from "../../../const/theme";
import { ThemeContext } from "../../../lib/context/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;

  const defaultTheme = useJsonSettingByKey("theme") as Theme;

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT
  );
  const [inited, setInited] = useState(false);

  useEffect(() => {
    if (!inited && defaultTheme) {
      setTheme(defaultTheme);
      setInited(true);
    }
  }, [defaultTheme, inited]);

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
