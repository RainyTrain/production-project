import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "../../Deprecated/Avatar";
import { Hstack } from "../Stack";
import cls from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
  size?: string;
}

export const AppLogo = ({ className, size = '100px' }: AppLogoProps) => (
  <Hstack
    className={classNames(cls.AppLogo, {}, [className])}
    max
    justify="center"
  >
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <Avatar
      src="https://avatars.githubusercontent.com/u/89872191?s=400&u=64315979b5bb47a77ba4a25c5b33d28fa7854ada&v=4"
      className={cls.appLogoWrapper}
      size={size}
    />
  </Hstack>
);
