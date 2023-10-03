import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { className, Icon, inverted, ...otherProps } = props;
  return (
    <Icon
      {...otherProps}
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
        className,
      ])}
    />
  );
});
