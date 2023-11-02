import LightIcon from "shared/assets/icons/theme-light.svg";
import DarlIcon from "shared/assets/icons/theme-dark.svg";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { saveJsonSettings } from "entities/User";
import { Button, ThemButton } from "../../../shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Button
      onClick={onToggleHandler}
      className={classNames("", {}, [className])}
      theme={ThemButton.CLEAR}
    >
      {theme === "app_light_theme" ? <LightIcon /> : <DarlIcon />}
    </Button>
  );
});
