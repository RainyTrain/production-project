import { memo, ReactNode } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export type AppLinkTheme = "primary" | "red";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkTheme;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    variant = "primary",
    children,
    activeClassName = "",
    ...otherProps
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});