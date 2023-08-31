import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Hstack } from "shared/ui/Stack/Hstack/Hstack";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadOnly);

  const auth = useSelector(getUserAuthData);

  const profileData = useSelector(getProfileData);

  const canEdit = auth?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelUpdate());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData(auth?.id!));
  }, [auth?.id, dispatch]);

  return (
    <Hstack
      max
      justify="between"
      className={classNames(cls.ProfilePageHeader, {}, [className])}
    >
      <Text title={t("Profile")} />
      {canEdit && (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {readOnly ? (
            <Button
              theme={ThemButton.OUTLINE}
              className={cls.editBtn}
              onClick={onEdit}
            >
              {t("Edit")}
            </Button>
          ) : (
            <Hstack gap="8" justify="end" max>
              <Button
                theme={ThemButton.OUTLINE_RED}
                className={cls.editBtn}
                onClick={onCancelEdit}
              >
                {t("Cancel")}
              </Button>
              <Button
                theme={ThemButton.OUTLINE}
                className={cls.saveBtn}
                onClick={onSave}
              >
                {t("Save")}
              </Button>
            </Hstack>
          )}
        </>
      )}
    </Hstack>
  );
};
