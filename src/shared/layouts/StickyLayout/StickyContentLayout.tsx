import { memo, ReactElement } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./StickyContentLayout.module.scss";

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  contnent: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = memo(
  ({ className, left, contnent, right }: StickyContentLayoutProps) => (
    <div className={classNames(cls.StickyContentLayout, {}, [className])}>
      {left && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{contnent}</div>
      {right && <div className={cls.right}>{right}</div>}
    </div>
  )
);
