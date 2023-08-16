import { CountrySelect } from "entities/Country";
import { CurrencySelect } from "entities/Currency";
import { Profile } from "entities/Profile/model/types/profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Page } from "widgets/Page/Page";
import { Text, TextTheme } from "shared/ui/Text/Text";
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
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t("Error occured while loading profile")}
          theme={TextTheme.ERROR}
          text={t("Try reloading the page")}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar alt="Avatar" src={data?.avatar} />
          </div>
        )}

        <Input
          value={data?.first}
          placeholder={t("Name")}
          className={cls.input}
          onChange={onChangeFirstName}
          readOnly={readOnly}
        />
        <Input
          value={data?.second}
          placeholder={t("Surname")}
          className={cls.input}
          onChange={onChangeLastName}
          readOnly={readOnly}
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
      </div>
    </div>
  );
};
