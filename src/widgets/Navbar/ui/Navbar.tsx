import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppLink, classNames } from "shared";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const disptach = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
    console.log(true);
  }, []);

  const onLogout = useCallback(() => {
    disptach(userActions.logout());
  }, [disptach]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Text
          text="Production"
          className={cls.appName}
          theme={TextTheme.INVERTED}
        />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          New article
        </AppLink>
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
