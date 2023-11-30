import ThemeIcon from "shared/assets/icons/theme-light.svg";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { saveJsonSettings } from "entities/User";
import { Icon as IconDeprecated } from "shared/ui/Deprecated/Icon";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { ToggleFeatures } from "shared/features";
import { Icon } from "shared/ui/Redesigned/Icon";
import ThemeIconNew from "shared/assets/icons/theme.svg";

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
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <ButtonDeprecated
          onClick={onToggleHandler}
          className={classNames("", {}, [className])}
          theme={ThemButton.CLEAR}
        >
          <IconDeprecated Icon={ThemeIcon} width={40} height={40} inverted />
        </ButtonDeprecated>
      }
      on={<Icon Icon={ThemeIconNew} clickable onClick={onToggleHandler} />}
    />
  );
});
