import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarlIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemButton } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemButton.CLEAR}>
      {theme === 'light' ? <LightIcon /> : <DarlIcon />}
    </Button>
  );
};
