import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

export type CardVariant = "normal" | "outlined" | "light";

export type CardPaddigns = "0" | "8" | "16" | "24";

export type CardBorder = "round" | "normal" | "halfRound";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPaddigns;
  border?: CardBorder;
  max?: boolean;
  fulllWidth?: boolean;
  fullHeight?: boolean;
}

const mapPaddingToClass: Record<CardPaddigns, string> = {
  "0": "gap_0",
  "8": "gap_8",
  "16": "gap_16",
  "24": "gap_24",
};

const mapBorderToClass: Record<CardBorder, string> = {
  normal: "normalBorder",
  round: "roundBorder",
  halfRound: "halfRoundBorder",
};

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = "normal",
    padding = "8",
    border = "normal",
    max = false,
    fulllWidth,
    fullHeight,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(
        cls.Card,
        {
          [cls.max]: max,
          [cls.fullHeight]: fullHeight,
          [cls.fulllWidth]: fulllWidth,
        },
        [
          className,
          cls[variant],
          cls[mapPaddingToClass[padding]],
          cls[mapBorderToClass[border]],
        ]
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
