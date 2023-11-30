import { memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import ProfileAvatar from "shared/assets/icons/ProfileAvatar.svg";
import cls from "./Avatar.module.scss";
import { Icon } from "../Icon";
import { Skeleton } from "../../Deprecated/Skeleton";
import { AppImage } from "../../Redesigned/AppImage/AppImage";

interface AvatartProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: string;
}

export const Avatar = memo((props: AvatartProps) => {
  const { className, src, alt, size = "100px" } = props;

  const mods: Mods = {};

  const styles = useMemo<React.CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;

  const errorFallback = (
    <Icon
      width={size}
      height={size}
      Icon={ProfileAvatar}
    />
  );

  return (
    <AppImage
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      errorFallback={errorFallback}
      fallback={fallback}
    />
  );
});
