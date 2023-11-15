import { memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";
import cls from "./Tab.module.scss";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tab = memo((props: TabProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.Tab, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          key={tab.value}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
