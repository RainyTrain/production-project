import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Vstack } from "shared/ui/Redesigned/Stack";
import { Text as TextDeprecated, TextAlign } from "shared/ui/Deprecated/Text";
import { ToggleFeatures } from "shared/features";
import { Text } from "shared/ui/Redesigned/Text";
import { Comment } from "../../model/types/Comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({
  className,
  comments,
  isLoading,
}: CommentListProps) => {
  const { t } = useTranslation();
  return (
    <Vstack
      gap="16"
      className={classNames(cls.CommentList, {}, [className])}
      max
    >
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppReDesigned"
          off={<TextDeprecated text={t("Not found")} align={TextAlign.LEFT} />}
          on={<Text text={t("Not found")} align="left" />}
        />
      )}
    </Vstack>
  );
};
