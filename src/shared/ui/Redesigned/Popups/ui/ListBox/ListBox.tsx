import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropDownDirection } from "shared/types/ui";
import cls from "./ListBox.module.scss";
import { Button } from "../../../Button/Button";
import { Hstack } from "../../../../Redesigned/Stack/Hstack/Hstack";
import { mapDirectionClass } from "../../styles/const";
import popupCls from "../../styles/popup.module.scss";

interface SelectOption<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  options: SelectOption<T>[];
  value: T;
  onChange: (arg: T) => void;
  className?: string;
  defaultValue: T;
  readonly?: boolean;
  label?: string;
  direction?: DropDownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    options,
    value,
    onChange,
    defaultValue,
    readonly,
    label,
    direction = "top right",
  } = props;

  const optionsMods = [
    cls.options,
    mapDirectionClass[direction],
    popupCls.menu,
  ];

  return (
    <Hstack align="center">
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
      >
        <HListBox.Button as={Fragment}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.item, {}, optionsMods)}>
          {options.map((option) => (
            <HListBox.Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: option.disabled,
                  })}
                >
                  {selected && "!!!"}
                  {option.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </Hstack>
  );
};
