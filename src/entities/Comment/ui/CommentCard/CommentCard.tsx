import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Deprecated/Avatar";
import { Skeleton } from "shared/ui/Deprecated/Skeleton";
import { Text } from "shared/ui/Deprecated/Text";
import { AppLink } from "shared/ui/Deprecated/AppLink";
import { getProfilePage } from "shared/const/router";
import { Comment } from "../../model/types/Comment";
import cls from "./CommentCard.module.scss";

interface commentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({
  className,
  comment,
  isLoading,
}: commentCardProps) => {
  if (isLoading) {
    return (
      <div
        data-testId="CommentCard"
        className={classNames(cls.CommentCard, {}, [className])}
      >
        <div className={cls.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.CommentCard, {}, [className])}
      data-testId="CommentCard"
    >
      <AppLink to={getProfilePage(comment.id)} className={cls.header}>
        {comment.user.avatar && (
          <Avatar size="30px" src={comment.user.avatar} />
        )}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
};
