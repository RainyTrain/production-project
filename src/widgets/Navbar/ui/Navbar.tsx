import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const disptach = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);

  const isManager = useSelector(isUserManager);

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

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Text
          text="Production"
          className={cls.appName}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          New article
        </AppLink>
        <Dropdown
          items={[
            ...(isAdminPanelAvailable
              ? [{ content: "Admin", href: RoutePath.admin_panel }]
              : []),
            { content: "Profile", href: RoutePath.profile + authData.id },
            { content: "Sign out", onClick: onLogout },
          ]}
          className={cls.dropdown}
          trigger={<Avatar size="30px" src={authData.avatar} />}
          direction="bottom left"
        />
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
