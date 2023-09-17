import { classNames } from "shared";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
  INVERTED = "inverted",
}

export enum TextSize {
  M = "m",
  L = "l",
}

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

export const Text = ({
  className,
  title,
  text,
  size = TextSize.M,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  "data-testid": datTestId = "Text",
}: TextProps) => {
  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
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
};
