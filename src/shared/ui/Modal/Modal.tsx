import React, { useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
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
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
