import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "filled";

export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "size_M" | "size_L" | "size_XL";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  chilren?: ReactNode;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  color?: ButtonColor;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      variant = "clear",
      square,
      size = "size_M",
      disabled,
      addonLeft,
      addonRight,
      color = "normal",
      ...otherProps
    } = props;

    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls[variant]]: true,
      [cls[size]]: true,
      [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        type="button"
        disabled={disabled}
        className={classNames(cls.Button, mods, [
          className,
          cls[variant],
          cls[size],
          cls[color],
        ])}
        {...otherProps}
        ref={ref}
      >
        <div className={cls.addonLeft}>{addonLeft}</div>
        {children}
        <div className={cls.addonRight}>{addonRight}</div>
      </button>
    );
  }
);
