import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Deprecated/Loader";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { Text as TextDeprecated, TextTheme } from "shared/ui/Deprecated/Text";
import { Avatar as AvatarDeprecated } from "shared/ui/Deprecated/Avatar";
import { Input as InputDeprecated } from "shared/ui/Deprecated/Input";
import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";

import cls from "./ProfileCardDeprecated.module.scss";

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation();
  return (
    <Vstack
      gap="8"
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <TextDeprecated
        title={t("Error occured while loading profile")}
        theme={TextTheme.ERROR}
        text={t("Try reloading the page")}
      />
    </Vstack>
  );
};

export const ProfileCardDeprecatedLoader = () => (
  <Vstack
    gap="8"
    max
    justify="center"
    align="center"
    className={classNames(cls.ProfileCard, { [cls.loading]: true }, [])}
  >
    <Loader />
  </Vstack>
);

export const ProfileCardDeprecated = ({
  className,
  data,
  isLoading,
  error,
  readOnly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Vstack
        gap="8"
        max
        justify="center"
        align="center"
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </Vstack>
    );
  }

  if (error) {
    return (
      <Vstack
        gap="8"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <TextDeprecated
          title={t("Error occured while loading profile")}
          theme={TextTheme.ERROR}
          text={t("Try reloading the page")}
        />
      </Vstack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <Vstack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <Hstack max justify="center" align="center">
          <AvatarDeprecated alt="Avatar" src={data?.avatar} />
        </Hstack>
      )}

      <InputDeprecated
        value={data?.first}
        placeholder={t("Name")}
        className={cls.input}
        onChange={onChangeFirstName}
        readOnly={readOnly}
        data-testid="ProfileCard.FirstName"
      />
      <InputDeprecated
        value={data?.second}
        placeholder={t("Surname")}
        className={cls.input}
        onChange={onChangeLastName}
        readOnly={readOnly}
        data-testid="ProfileCard.LastName"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t("Age")}
        className={cls.input}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t("City")}
        className={cls.input}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t("Username")}
        className={cls.input}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t("Avatar")}
        className={cls.input}
        onChange={onChangeAvatar}
        readOnly={readOnly}
      />
      <CurrencySelect
        className={cls.input}
        onChange={onChangeCurrency}
        value={data?.currency}
        readOnly={readOnly}
      />
      <CountrySelect
        className={cls.input}
        onChange={onChangeCountry}
        value={data?.country}
        readOnly={readOnly}
      />
    </Vstack>
  );
};
