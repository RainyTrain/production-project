import { useTheme } from "shared/ui/ThemeProvider";
import { classNames } from "shared";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarlIcon from "shared/assets/icons/theme-dark.svg";
import { memo } from "react";
import { Button, ThemButton } from "../../shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
      theme={ThemButton.CLEAR}
    >
      {theme === "app_light_theme" ? <LightIcon /> : <DarlIcon />}
    </Button>
  );
});
