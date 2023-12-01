import { useTranslation } from "react-i18next";
import { getArticlesDetailsPage } from "shared/const/router";
import { classNames } from "shared/lib/classNames/classNames";
import { AppImage } from "shared/ui/Redesigned/AppImage/AppImage";
import { AppLink } from "shared/ui/Redesigned/AppLink";
import { Avatar } from "shared/ui/Redesigned/Avatar";
import { Button } from "shared/ui/Redesigned/Button";
import { Card } from "shared/ui/Redesigned/Card";
import { Icon } from "shared/ui/Redesigned/Icon";
import { Skeleton } from "shared/ui/Redesigned/Skeleton";
import { Hstack, Vstack } from "shared/ui/Redesigned/Stack";
import { Text } from "shared/ui/Redesigned/Text";
import { USE_SESSIONSTORAGE_POSITION } from "shared/const/sessionStorage";
import View from "shared/assets/icons/eye.svg";
import { ArticleTextBlock } from "../../../model/types/article";
import { ArticleBlockType } from "../../../model/consts/consts";
import { ArticleListItemProps } from "../ArticleListItem";
import cls from "./ArticleItemRedesigned.module.scss";

interface ArticleItemRedesignedProps {
  className?: string;
}

export const ArticleItemRedesigned = (props: ArticleListItemProps) => {
  const {
    className,
    article,
    isLoading,
    view = "SMALL",
    target,
    isTarget,
    positionIndex,
  } = props;

  const { t } = useTranslation();

  const setPositionIndex = () =>
    sessionStorage.setItem(
      USE_SESSIONSTORAGE_POSITION,
      JSON.stringify(positionIndex)
    );

  if (view === "BIG") {
    const text = article.blocks.find(
      (element) => element.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <Card
        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        padding="24"
        max
      >
        <Vstack max gap="16">
          <Hstack gap="8">
            <Avatar size="32px" src={article.user.avatar} />
            <Text text={article.user.username} bold />
            <Text text={article.createdAt} bold />
          </Hstack>
          <Text text={article.title} bold />
          <Text text={article.subtitle} />
          <AppImage
            src={article.img}
            alt={article.title}
            className={cls.img}
            fallback={<Skeleton width="100%" height="250px" />}
          />
          {text && (
            <Text
              className={cls.textBlock}
              text={text.paragraphs.slice(0, 2).join(" ")}
            />
          )}
          <Hstack max justify="between" align="center">
            <AppLink
              target={isTarget ? target : undefined}
              to={getArticlesDetailsPage(article.id)}
            >
              <Button onClick={setPositionIndex} variant="outline">
                {t("Read")}
              </Button>
            </AppLink>
            <Hstack gap="8" align="center">
              <Icon Icon={View} />
              <Text text={String(article.views)} className={cls.views} />
            </Hstack>
          </Hstack>
        </Vstack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testId="ArticleListItem"
      target={isTarget ? target : undefined}
      to={getArticlesDetailsPage(article.id)}
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    >
      <Card onClick={setPositionIndex} border="round" className={cls.card}>
        <AppImage
          src={article.img}
          className={cls.img}
          alt={article.title}
          fallback={<Skeleton width="200px" height="200px" />}
        />
        <Vstack className={cls.info}>
          <Text text={article.title} className={cls.title} />
          <Vstack gap="4" className={cls.footer} max>
            <Hstack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {article.views}
            </Hstack>
            <Hstack gap="4">
              <Avatar size="32px" src={article.user.avatar} />
              <Text text={article.user.username} bold />
            </Hstack>
          </Vstack>
        </Vstack>
      </Card>
    </AppLink>
  );
};
