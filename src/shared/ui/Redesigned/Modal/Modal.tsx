import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import { Portal } from "../Portal";
import { useTheme } from "../../../lib/hooks/useTheme/useTheme";
import { Overlay } from "../Overlay";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
  children: ReactNode;
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

      timerRef.current = setTimeout(() => {
        setIsOpening(true);
      }, 10);
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      setIsMounted(false);
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById("app") ?? document.body}>
      <div
        className={classNames(cls.Modal, mods, [
          className,
          theme,
          "app_modal",
          toggleFeature({
            name: "isAppReDesigned",
            on: () => cls.modalNew,
            off: () => cls.modalOld,
          }),
        ])}
      >
        <Overlay onClick={closeHandler} />
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
