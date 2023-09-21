import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Icon }: IconProps) => (
  <Icon className={classNames(cls.Icon, {}, [className])} />
);
