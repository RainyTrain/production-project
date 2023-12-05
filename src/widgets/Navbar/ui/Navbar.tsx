import { getUserAuthData } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/Deprecated/AppLink";
import { Hstack } from "shared/ui/Redesigned/Stack";
import { Text, TextTheme } from "shared/ui/Deprecated/Text";
import { NotificationButton } from "features/NotificationButton";
import { AvatarDropdown } from "features/AvatarDropdown";
import { getArticleCreatePage } from "shared/const/router";
import { ToggleFeatures } from "shared/features";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import { Button } from "shared/ui/Redesigned/Button";
import cls from "./Navbar.module.scss";

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

  const mainClass = toggleFeature({
    name: "isAppReDesigned",
    off: () => cls.Navbar,
    on: () => cls.NavbarRedesigned,
  });

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppReDesigned"
        off={
          <div className={classNames(mainClass, {}, [className])}>
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
        }
        on={
          <div className={classNames(mainClass, {}, [className])}>
            <Hstack gap="16" className={cls.actions} align="center">
              <NotificationButton />
              <AvatarDropdown />
            </Hstack>
          </div>
        }
      />
    );
  }

  return (
    <div className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppReDesigned"
        off={
          <ButtonDeprecated
            theme={ThemButton.CLEAR_INVERTED}
            className={cls.links}
            onClick={onShowModal}
          >
            {t("Sign in")}
          </ButtonDeprecated>
        }
        on={
          <Button variant="clear" className={cls.links} onClick={onShowModal}>
            {t("Sign in")}
          </Button>
        }
      />
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
    </div>
  );
});
