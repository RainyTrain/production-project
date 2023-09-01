import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropDownDirection } from "shared/types/ui";
import cls from "./ListBox.module.scss";
import { Button } from "../Button/Button";
import { Hstack } from "../Stack/Hstack/Hstack";

interface SelectOption<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

const DirectionClass: Record<DropDownDirection, string> = {
  "bottom left": cls.bottomLeft,
  "bottom right": cls.bottomRight,
  "top left": cls.topLeft,
  "top right": cls.topRight,
};

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

  const optionsMods = [cls.options, DirectionClass[direction]];

  return (
    <Hstack align="center">
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, {}, [className])}
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
                    [cls.active]: active,
                    [cls.disabled]: option.disabled,
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
