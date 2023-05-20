import { useState } from "react";
import { classNames } from "shared";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
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
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher className="hello" />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
