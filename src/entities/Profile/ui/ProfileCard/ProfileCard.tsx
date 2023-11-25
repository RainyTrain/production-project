import { CountrySelect } from "entities/Country";
import { CurrencySelect } from "entities/Currency";
import { useTranslation } from "react-i18next";
import { ToggleFeatures } from "shared/features";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar as AvatarDeprecated } from "shared/ui/Deprecated/Avatar";
import { Input as InputDeprecated } from "shared/ui/Deprecated/Input";
import { Loader } from "shared/ui/Deprecated/Loader";
import { Text as TextDeprecated, TextTheme } from "shared/ui/Deprecated/Text";
import { Avatar } from "shared/ui/Redesigned/Avatar";
import { Card } from "shared/ui/Redesigned/Card";
import { Input } from "shared/ui/Redesigned/Input";
import { Vstack, Hstack } from "shared/ui/Redesigned/Stack";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstName: (value?: string) => void;
  onChangeLastName: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCity: (value?: string) => void;
  onChangeUsername: (value?: string) => void;
  onChangeAvatar: (value?: string) => void;
  onChangeCurrency: (value?: string) => void;
  onChangeCountry: (value?: string) => void;
}

export const ProfileCard = ({
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
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
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
      }
      on={
        <Card
          padding="24"
          className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
          <Vstack gap="32">
            {data?.avatar && (
              <Hstack max justify="center" align="center">
                <Avatar alt="Avatar" src={data?.avatar} size="120px" />
              </Hstack>
            )}

            <Hstack gap="16" max>
              <Vstack gap="16" max>
                <Input
                  value={data?.first}
                  label={t("Name")}
                  className={cls.input}
                  onChange={onChangeFirstName}
                  readOnly={readOnly}
                  data-testid="ProfileCard.FirstName"
                />
                <Input
                  value={data?.second}
                  label={t("Surname")}
                  className={cls.input}
                  onChange={onChangeLastName}
                  readOnly={readOnly}
                  data-testid="ProfileCard.LastName"
                />
                <Input
                  value={data?.age}
                  label={t("Age")}
                  className={cls.input}
                  onChange={onChangeAge}
                  readOnly={readOnly}
                />
                <Input
                  value={data?.city}
                  label={t("City")}
                  className={cls.input}
                  onChange={onChangeCity}
                  readOnly={readOnly}
                />
              </Vstack>
              <Vstack gap="16" max>
                <Input
                  value={data?.username}
                  label={t("Username")}
                  className={cls.input}
                  onChange={onChangeUsername}
                  readOnly={readOnly}
                />
                <Input
                  value={data?.avatar}
                  label={t("Avatar")}
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
            </Hstack>
          </Vstack>
        </Card>
      }
    />
  );
};
