import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Deprecated/Loader";
import { Modal } from "shared/ui/Redesigned/Modal";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    lazy
    className={classNames("", {}, [className])}
  >
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
