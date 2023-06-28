import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Profile")} />
        <Button theme={ThemButton.OUTLINE} className={cls.editBtn}>
          {t("Edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("Name")}
          className={cls.input}
        />
        <Input
          value={data?.second}
          placeholder={t("Surname")}
          className={cls.input}
        />
      </div>
    </div>
  );
};
