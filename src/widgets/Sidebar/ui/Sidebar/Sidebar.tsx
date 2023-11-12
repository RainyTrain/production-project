import { memo, useMemo, useState } from "react";
import { Button, ButtonSize, ThemButton } from "shared/ui/Button";
import { useSelector } from "react-redux";
import { Vstack } from "shared/ui/Stack";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "features/LangSwitcher";
import { ToggleFeatures } from "shared/features";
import { Avatar } from "shared/ui/Avatar";
import { getSideBarItems } from "../../model/selectors/getSideBarItems";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ThemeSwitcher } from "../../../../features/ThemeSwitcher/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const items = useSelector(getSideBarItems);

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () =>
      items.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, items]
  );

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
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
          <Vstack gap="8" className={cls.items} align="start">
            {itemList}
          </Vstack>
          <div className={cls.switchers}>
            <ThemeSwitcher className="hello" />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </div>
      }
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className]
          )}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/89872191?s=400&u=64315979b5bb47a77ba4a25c5b33d28fa7854ada&v=4"
            className={cls.logo}
          />
          {/* <Button
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
          <Vstack gap="8" className={cls.items} align="start">
            {itemList}
          </Vstack> */}
          <div className={cls.switchers}>
            <ThemeSwitcher className="hello" />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </aside>
      }
    />
  );
});
