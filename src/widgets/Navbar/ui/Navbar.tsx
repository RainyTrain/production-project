import { getUserAuthData } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { Button, ThemButton } from "shared/ui/Button";
import { Hstack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/Text";
import { NotificationButton } from "features/NotificationButton";
import { AvatarDropdown } from "features/AvatarDropdown";
import cls from "./Navbar.module.scss";
import { getArticleCreatePage } from "shared/const/router";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Text
          text="Production"
          className={cls.appName}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={getArticleCreatePage()}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          New article
        </AppLink>
        <Hstack gap="16" className={cls.actions} align="center">
          <NotificationButton />
          <AvatarDropdown />
        </Hstack>
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
