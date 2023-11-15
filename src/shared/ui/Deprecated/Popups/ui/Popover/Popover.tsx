import { Popover as HPopover } from "@headlessui/react";
import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropDownDirection } from "shared/types/ui";
import { mapDirectionClass } from "../../styles/const";
import popupCls from "../../styles/popup.module.scss";
import cls from "./Popover.module.scss";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: DropDownDirection;
}

export const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = "bottom left", children } = props;

  const menuClasses = [className, mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel
        unmount={false}
        className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
