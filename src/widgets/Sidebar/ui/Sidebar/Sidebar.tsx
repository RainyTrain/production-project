import { useState } from "react";
import { AppLink, classNames } from "shared";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ThemButton } from "shared/ui/Button/Button";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapsedBtn}
        square
        size={ButtonSize.L}
        theme={ThemButton.BACKGROUND_INVERTED}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <div>
          <AppLink
            to={RoutePath.main}
            theme={AppLinkTheme.SECONDARY}
            className={cls.item}
          >
            <MainIcon className={cls.icon} />
            <span className={cls.link}>Main</span>
          </AppLink>
        </div>
        <div className={cls.item}>
          <AppLink
            to={RoutePath.about}
            theme={AppLinkTheme.SECONDARY}
            className={cls.item}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>About</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher className="hello" />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
