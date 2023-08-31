import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency/model/types/currency";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";

import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared";
import {
  DynamicModule,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModule";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { Page } from "widgets/Page/Page";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Vstack } from "shared/ui/Stack/Vstack/Vstack";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadOnly);
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);

  useEffect(() => {
    if (__PROJECT__ === "frontend" && id) {
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
    <DynamicModule reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames("", {}, [className])}>
        <Vstack gap="16" max justify="between">
          <ProfilePageHeader />
          {validateErrors?.length &&
            validateErrors.map((err) => (
              <Text theme={TextTheme.ERROR} text={err} align={TextAlign.LEFT} />
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
      </Page>
    </DynamicModule>
  );
};

export default ProfilePage;
