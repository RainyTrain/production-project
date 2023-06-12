import React, { InputHTMLAttributes, memo, useState } from "react";
import { classNames } from "shared";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [curetPosition, setCuretPosition] = useState<number>(0);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCuretPosition(event.target.value.length);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${curetPosition * 6.9}px` }}
            className={cls.caret}
          />
        )}
      </div>
    </div>
  );
});
