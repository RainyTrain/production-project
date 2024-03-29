import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from "shared/ui/Deprecated/Text";
import { ProfileCard } from "entities/Profile";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { ToggleFeatures } from "shared/features";
import { Text } from "shared/ui/Redesigned/Text";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateError/getProfileValidateError";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

const initialReducers: ReducerList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const EditableProfileCard = ({
  className,
  id,
}: EditableProfileCardProps) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const readOnly = useSelector(getProfileReadOnly);
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);

  useEffect(() => {
    if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest" && id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ second: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const validate = value?.replace(/\D+/gm, "");
      dispatch(profileActions.updateProfile({ age: Number(validate) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({ currency: (value as Currency) || "" })
      );
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({ country: (value as Country) || "" })
      );
    },
    [dispatch]
  );

  return (
    <DynamicModule reducers={initialReducers}>
      <Vstack gap="8" max className={classNames("", {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err: string | undefined) => (
            <ToggleFeatures
              feature="isAppReDesigned"
              off={
                <TextDeprecated
                  data-testid="EditableProfileCard.Error"
                  theme={TextTheme.ERROR}
                  text={err}
                  align={TextAlign.LEFT}
                />
              }
              on={
                <Text
                  data-testid="EditableProfileCard.Error"
                  variant="error"
                  text={err}
                  align={TextAlign.LEFT}
                />
              }
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          readOnly={readOnly}
          onChangeCountry={onChangeCountry}
        />
      </Vstack>
    </DynamicModule>
  );
};
