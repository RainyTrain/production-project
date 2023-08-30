import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import { Text, TextAlign } from "shared/ui/Text/Text";
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
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t("Not found")} align={TextAlign.LEFT} />
      )}
    </div>
  );
};
