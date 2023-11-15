import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getAdminPanelPage, getProfilePage } from "shared/const/router";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Avatar } from "shared/ui/Deprecated/Avatar";
import { Dropdown } from "shared/ui/Deprecated/Popups";

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
          ? [{ content: "Admin", href: getAdminPanelPage() }]
          : []),
        { content: "Profile", href: getProfilePage(authData?.id) },
        { content: "Sign out", onClick: onLogout },
      ]}
      trigger={<Avatar fallbackInverted size="30px" src={authData.avatar} />}
      direction="bottom left"
    />
  );
};
