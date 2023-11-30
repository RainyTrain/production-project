import { getUserAuthData } from "entities/User";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ToggleFeatures } from "shared/features";
import { classNames } from "shared/lib/classNames/classNames";
import {
  AppLink as ApplinkDeprecated,
  AppLinkTheme,
} from "shared/ui/Deprecated/AppLink";
import { AppLink } from "shared/ui/Redesigned/AppLink";
import { Icon } from "shared/ui/Redesigned/Icon";
import { SidebarItemType } from "../../model/types/SidebarItemType";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <ApplinkDeprecated
          to={item.path}
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
          <item.icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </ApplinkDeprecated>
      }
      on={
        <AppLink
          to={item.path}
          className={classNames(
            cls.itemRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            []
          )}
          activeClassName={cls.acive}
        >
          <Icon Icon={item.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
    />
  );
});
