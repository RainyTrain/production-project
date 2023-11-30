import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
  className?: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = ClickableIconProps | NonClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Icon,
    width = "32px",
    height = "32px",
    ...otherProps
  } = props;

  const icon = (
    <Icon
      {...otherProps}
      className={classNames(cls.Icon, {}, [className])}
      height={height}
      width={width}
      onClick={undefined}
    />
  );

  if (props.clickable) {
    return (
      <button
        onClick={props.onClick}
        type="button"
        className={cls.button}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }
  return icon;
});
