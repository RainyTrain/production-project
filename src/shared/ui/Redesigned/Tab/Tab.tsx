import { memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "../Card/Card";
import { Flex } from "../Stack";
import { FlexDirection } from "../Stack/Flex/Flex";
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
  direction?: FlexDirection;
}

export const Tab = memo((props: TabProps) => {
  const { className, tabs, value, onTabClick, direction = "row" } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <Flex
      direction={direction}
      className={classNames(cls.Tab, {}, [className])}
      gap="8"
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            className={classNames(cls.tab, { [cls.selected]: isSelected })}
            key={tab.value}
            variant={tab.value === value ? "light" : "normal"}
            onClick={clickHandle(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
