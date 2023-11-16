import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Button, ThemButton } from "shared/ui/Deprecated/Button";
import { Hstack } from "shared/ui/Redesigned/Stack";
import { Text } from "shared/ui/Deprecated/Text";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({
  className,
}: EditableProfileCardHeaderProps) => {
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
    <Hstack max justify="between">
      <Text title={t("Profile")} />
      {canEdit && (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {readOnly ? (
            <Button
              theme={ThemButton.OUTLINE}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t("Edit")}
            </Button>
          ) : (
            <Hstack gap="8" justify="end" max>
              <Button
                theme={ThemButton.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                {t("Cancel")}
              </Button>
              <Button
                theme={ThemButton.OUTLINE}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
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
