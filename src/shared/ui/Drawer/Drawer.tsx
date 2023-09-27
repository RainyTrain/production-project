import { ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import { useTheme } from "../ThemeProvider";
import cls from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } = props;

  const { closeHandler, isClosing, isMounted } = useModal({
    animationDelay: 200,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const { theme } = useTheme();

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={closeHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
