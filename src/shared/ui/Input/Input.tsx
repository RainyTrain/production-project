import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared";
import { Mods } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  autofocus?: boolean;
  lazy?: boolean;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    readOnly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [curetPosition, setCuretPosition] = useState<number>(0);

  const isCarretFocused = isFocused && !readOnly;

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    if (event.target instanceof HTMLInputElement) {
      setCuretPosition(event.target.selectionStart as number);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCuretPosition(event.target.value.length);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCarretFocused && (
          <span
            style={{ left: `${curetPosition * 6.8}px` }}
            className={cls.caret}
          />
        )}
      </div>
    </div>
  );
});
