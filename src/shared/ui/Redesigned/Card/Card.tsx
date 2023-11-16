import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

export type CardVariant = "normal" | "outlined" | "light";

export type CardPaddigns = "0" | "8" | "16" | "24";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPaddigns;
}

const mapPaddingToClass: Record<CardPaddigns, string> = {
  "0": "gap_0",
  "8": "gap_8",
  "16": "gap_16",
  "24": "gap_24",
};

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = "normal",
    padding = "8",
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, {}, [
        className,
        cls[variant],
        cls[mapPaddingToClass[padding]],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
