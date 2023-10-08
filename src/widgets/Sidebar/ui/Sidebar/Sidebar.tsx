import { memo, useMemo, useState } from "react";
import { Button, ButtonSize, ThemButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { Vstack } from "shared/ui/Stack/Vstack/Vstack";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "../../../LangSwitcher/LangSwitcher";
import { getSideBarItems } from "../../model/selectors/getSideBarItems";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ThemeSwitcher } from "../../../ThemeSwitcher/ThemeSwitcher";

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
  );
});
