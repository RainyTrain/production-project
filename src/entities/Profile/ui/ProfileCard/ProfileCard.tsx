import { CountrySelect } from "entities/Country";
import { CurrencySelect } from "entities/Currency";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Vstack } from "shared/ui/Stack/Vstack/Vstack";
import { Hstack } from "shared/ui/Stack/Hstack/Hstack";
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
        <Text
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
          <Avatar alt="Avatar" src={data?.avatar} />
        </Hstack>
      )}

      <Input
        value={data?.first}
        placeholder={t("Name")}
        className={cls.input}
        onChange={onChangeFirstName}
        readOnly={readOnly}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.second}
        placeholder={t("Surname")}
        className={cls.input}
        onChange={onChangeLastName}
        readOnly={readOnly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        value={data?.age}
        placeholder={t("Age")}
        className={cls.input}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <Input
        value={data?.city}
        placeholder={t("City")}
        className={cls.input}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      <Input
        value={data?.username}
        placeholder={t("Username")}
        className={cls.input}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <Input
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
