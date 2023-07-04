import { getProfileReadOnly, profileActions } from "entities/Profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelUpdate());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(profileActions.cancelUpdate());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Profile")} />
      {readOnly ? (
        <Button
          theme={ThemButton.OUTLINE}
          className={cls.editBtn}
          onClick={onEdit}
        >
          {t("Edit")}
        </Button>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
