import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared";
import { Mods } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { useTheme } from "../ThemeProvider";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { theme } = useTheme();

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const mods: Mods = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    return () => setIsMounted(false);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        setIsOpening(true);
      }, 0);
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      setIsOpening(false);
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme, "app_modal"])}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
