import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useCallback, useContext } from "react";
import { useSelector } from "react-redux";
import {
  getAdminPanelPage,
  getProfilePage,
  getSettingPage,
} from "shared/const/router";
import { ToggleFeatures } from "shared/features";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { ForceUpdateContext } from "shared/lib/rerender/forceUpdate";
import { Avatar as AvatarDeprecated } from "shared/ui/Deprecated/Avatar";
import { Dropdown as DropdownDeprecated } from "shared/ui/Deprecated/Popups";
import { Avatar } from "shared/ui/Redesigned/Avatar";
import { Dropdown } from "shared/ui/Redesigned/Popups";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);

  const isManager = useSelector(isUserManager);

  const authData = useSelector(getUserAuthData);

  const isAdminPanelAvailable = isAdmin || isManager;

  const { forceUpdate } = useContext(ForceUpdateContext);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    forceUpdate();
  }, [dispatch, forceUpdate]);

  if (!authData) {
    return null;
  }

  const item = [
    ...(isAdminPanelAvailable
      ? [{ content: "Admin", href: getAdminPanelPage() }]
      : []),
    { content: "Profile", href: getProfilePage(authData?.id) },
    { content: "Sign out", onClick: onLogout },
    { content: "Settings", href: getSettingPage() },
  ];

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <DropdownDeprecated
          items={item}
          trigger={
            <AvatarDeprecated
              fallbackInverted
              size="30px"
              src={authData.avatar}
            />
          }
          direction="bottom left"
        />
      }
      on={
        <Dropdown
          items={item}
          trigger={<Avatar size="40px" src={authData.avatar} />}
          direction="bottom left"
        />
      }
    />
  );
};
