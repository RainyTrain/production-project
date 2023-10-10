import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RoutePath } from "shared/const/router";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Avatar } from "shared/ui/Avatar";
import { Dropdown } from "shared/ui/Popups";
import cls from "./AvatarDropdown.module.scss";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);

  const isManager = useSelector(isUserManager);

  const authData = useSelector(getUserAuthData);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: "Admin", href: RoutePath.admin_panel }]
          : []),
        { content: "Profile", href: RoutePath.profile + authData.id },
        { content: "Sign out", onClick: onLogout },
      ]}
      trigger={<Avatar size="30px" src={authData.avatar} />}
      direction="bottom left"
    />
  );
};
