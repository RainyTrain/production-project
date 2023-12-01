import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropDownDirection } from "shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import cls from "./Dropdown.module.scss";
import { mapDirectionClass } from "../../styles/const";
import popupCls from "../../styles/popup.module.scss";

interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropDownDirection;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = "bottom left" } = props;

  const menuClasses = [className, mapDirectionClass[direction], popupCls.menu];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              type="button"
              disabled={item.disabled}
              className={classNames(
                cls.item,
                { [popupCls.active]: active },
                []
              )}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              // fix bug with keyboard
              <Menu.Item
                refName="href"
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
