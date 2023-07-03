import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_M",
  L = "size_L",
  Xl = "size_XL",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemButton;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  chilren?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemButton.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls[theme]]: true,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
