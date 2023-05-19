import { AppLink, classNames } from 'shared';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.PRIMARY} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY} className={cls.mainLink}>
          About
        </AppLink>
      </div>
    </div>
  );
