import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextVariant = "primary" | "error" | "accent";

export type TextSize = "m" | "l";

export type TextAlign = "left" | "center" | "right";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

export const Text = ({
  className,
  title,
  text,
  size = "m",
  variant = "primary",
  align = "left",
  "data-testid": datTestId = "Text",
}: TextProps) => (
  <div
    className={classNames(cls.Text, {}, [
      className,
      cls[variant],
      cls[align],
      cls[size],
    ])}
  >
    {title && (
      <p className={cls.title} data-testid={`${datTestId}.Header`}>
        {title}
      </p>
    )}
    {text && (
      <p className={cls.text} data-testid={`${datTestId}.Paragraph`}>
        {text}
      </p>
    )}
  </div>
);
