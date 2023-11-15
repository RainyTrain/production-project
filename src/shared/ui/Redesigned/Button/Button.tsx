import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline";

export type ButtonSize = "size_M" | "size_L" | "size_XL";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  chilren?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = "clear",
    square,
    size = "size_M",
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls[variant]]: true,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [className, cls[variant],cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
