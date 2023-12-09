import { classNames } from "shared/lib/classNames/classNames";
import { Icon } from "shared/ui/Redesigned/Icon";
import CircleUp from "shared/assets/icons/circle-up.svg";
import cls from "./ScrollToButton.module.scss";

interface ScrollToButtonProps {
  className?: string;
}

export const ScrollToButton = ({ className }: ScrollToButtonProps) => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Icon
      Icon={CircleUp}
      clickable
      onClick={onClick}
      width={45}
      height={45}
      className={classNames(cls.ScrollToButton, {}, [className])}
    />
  );
};
