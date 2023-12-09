import { ScrollToButton } from "features/ScrollToButton";
import { classNames } from "shared/lib/classNames/classNames";
import { Vstack } from "shared/ui/Redesigned/Stack";
import cls from "./ScrollToolbar.module.scss";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = ({ className }: ScrollToolbarProps) => (
  <Vstack justify='center' align="center" max className={classNames(cls.ScrollToolbar, {}, [className])}>
    <ScrollToButton />
  </Vstack>
);
