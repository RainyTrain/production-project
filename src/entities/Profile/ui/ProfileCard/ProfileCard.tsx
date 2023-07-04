import { Profile } from "entities/Profile/model/types/profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readOnly,
  onChangeFirstName,
  onChangeLastName,
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

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div>
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
      </div>
    </div>
  );
};
