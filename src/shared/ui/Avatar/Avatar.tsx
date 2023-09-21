import { memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatartProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: string;
}

export const Avatar = memo((props: AvatartProps) => {
  const { className, src, alt, size } = props;

  const mods: Mods = {};

  const styles = useMemo<React.CSSProperties>(
    () => ({
      width: size || "100px",
      height: size || "100px",
    }),
    [size]
  );
  return (
    <img
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
});
