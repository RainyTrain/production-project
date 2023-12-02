import { User } from "entities/User";
import { useTranslation } from "react-i18next";
import { Avatar } from "shared/ui/Redesigned/Avatar";
import { Button } from "shared/ui/Redesigned/Button";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { Text } from "shared/ui/Redesigned/Text";

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = ({
  className,
  author,
  createdAt,
  views,
  onEdit,
}: ArticleAdditionalInfoProps) => {
  const { t } = useTranslation();
  return (
    <Vstack className={className}>
      <Hstack gap="8">
        <Avatar src={author.avatar} size="32px" />
        <Text text={author.username} bold />
        <Text text={createdAt} />
      </Hstack>
      <Button onClick={onEdit}>{t("Edit")}</Button>
      <Text text={t("View", { count: views })} />
    </Vstack>
  );
};
