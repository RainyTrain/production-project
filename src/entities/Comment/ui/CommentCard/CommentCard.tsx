import { AppLink, classNames } from "shared";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign } from "shared/ui/Text/Text";
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
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.id}`} className={cls.header}>
        {comment.user.avatar && (
          <Avatar size="30px" src={comment.user.avatar} />
        )}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
};
