import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared";
import { Mods } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange } = props;

  const mods: Mods = {};

  const optionsList = useMemo(
    () =>
      options?.map((opt: SelectOption) => (
        <option className={cls.option} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select className={cls.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
