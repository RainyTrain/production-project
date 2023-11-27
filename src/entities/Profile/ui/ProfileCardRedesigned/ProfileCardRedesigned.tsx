import { CountrySelect } from "entities/Country";
import { CurrencySelect } from "entities/Currency";
import { useTranslation } from "react-i18next";
import { Avatar } from "shared/ui/Redesigned/Avatar";
import { Card } from "shared/ui/Redesigned/Card";
import { Input } from "shared/ui/Redesigned/Input";
import { Skeleton } from "shared/ui/Redesigned/Skeleton";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { Text } from "shared/ui/Redesigned/Text";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";

interface ProfileCardRedesignedProps {
  className?: string;
}

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation();
  return (
    <Vstack gap="8" max align="center">
      <Text
        variant="error"
        title={t("Error occured while loading profile")}
        text={t("Try reloading the page")}
        align="center"
      />
    </Vstack>
  );
};

export const ProfileCardRedesignedSkeleton = () => (
  <Card padding="24" max>
    <Vstack gap="32">
      <Hstack max justify="center">
        <Skeleton border="100%" width="128px" height="128px" />
      </Hstack>
      <Hstack gap="32" max>
        <Vstack max>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </Vstack>
        <Vstack max>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </Vstack>
      </Hstack>
    </Vstack>
  </Card>
);

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
  const {
    className,
    data,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation();

  return (
    <Card padding="24" className={className} max>
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
              onChange={onChangeFirstName}
              readOnly={readOnly}
              data-testid="ProfileCard.FirstName"
            />
            <Input
              value={data?.second}
              label={t("Surname")}
              onChange={onChangeLastName}
              readOnly={readOnly}
              data-testid="ProfileCard.LastName"
            />
            <Input
              value={data?.age}
              label={t("Age")}
              onChange={onChangeAge}
              readOnly={readOnly}
            />
            <Input
              value={data?.city}
              label={t("City")}
              onChange={onChangeCity}
              readOnly={readOnly}
            />
          </Vstack>
          <Vstack gap="16" max>
            <Input
              value={data?.username}
              label={t("Username")}
              onChange={onChangeUsername}
              readOnly={readOnly}
            />
            <Input
              value={data?.avatar}
              label={t("Avatar")}
              onChange={onChangeAvatar}
              readOnly={readOnly}
            />
            <CurrencySelect
              onChange={onChangeCurrency}
              value={data?.currency}
              readOnly={readOnly}
            />
            <CountrySelect
              onChange={onChangeCountry}
              value={data?.country}
              readOnly={readOnly}
            />
          </Vstack>
        </Hstack>
      </Vstack>
    </Card>
  );
};
