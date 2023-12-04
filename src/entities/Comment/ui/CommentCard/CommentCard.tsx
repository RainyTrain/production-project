import { classNames } from "shared/lib/classNames/classNames";
import { Avatar as AvatarDeprecated } from "shared/ui/Deprecated/Avatar";
import { Skeleton as SkeletonDeprecated } from "shared/ui/Deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "shared/ui/Redesigned/Skeleton";
import { Text as TextDeprecated } from "shared/ui/Deprecated/Text";
import { AppLink as AppLinkDeprecated } from "shared/ui/Deprecated/AppLink";
import { getProfilePage } from "shared/const/router";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { ToggleFeatures } from "shared/features";
import { Card } from "shared/ui/Redesigned/Card";
import { AppLink } from "shared/ui/Redesigned/AppLink";
import { Avatar } from "shared/ui/Redesigned/Avatar";
import { Text } from "shared/ui/Redesigned/Text";
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
  const Skeleton = toggleFeature({
    name: "isAppReDesigned",
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
  });

  if (isLoading) {
    return (
      <Vstack
        data-testId="CommentCard"
        gap="8"
        max
        className={classNames(
          toggleFeature({
            name: "isAppReDesigned",
            off: () => cls.CommentCard,
            on: () => cls.CommentCardRedesigned,
          }),
          {},
          [className]
        )}
      >
        <div className={cls.header}>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </Vstack>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <Vstack
          className={classNames(cls.CommentCard, {}, [className])}
          data-testId="CommentCard"
          gap="8"
          max
        >
          <AppLinkDeprecated
            to={getProfilePage(comment.id)}
            className={cls.header}
          >
            {comment.user.avatar && (
              <AvatarDeprecated size="30px" src={comment.user.avatar} />
            )}
            <TextDeprecated
              className={cls.username}
              title={comment.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated text={comment.text} className={cls.text} />
        </Vstack>
      }
      on={
        <Card padding="24" border="round" fulllWidth>
          <Vstack
            className={classNames(cls.CommentCardRedesigned, {}, [className])}
            data-testId="CommentCard"
            gap="8"
            max
          >
            <AppLink to={getProfilePage(comment.id)}>
              <Hstack gap="8">
                {comment.user.avatar && (
                  <Avatar size="30px" src={comment.user.avatar} />
                )}
              </Hstack>
              <Text title={comment.user.username} bold />
            </AppLink>
            <Text text={comment.text} />
          </Vstack>
        </Card>
      }
    />
  );
};
