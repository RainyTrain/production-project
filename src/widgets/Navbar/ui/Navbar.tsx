import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Button, ThemButton } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const disptach = useAppDispatch()
  
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    disptach(userActions.logout());
  }, [disptach]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ThemButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t("Sign out")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Sign in")}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
    </div>
  );
});
