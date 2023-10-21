import { classNames } from "shared/lib/classNames/classNames";
import { Icon } from "shared/ui/Icon";
import { Text } from "shared/ui/Text";
import View from "shared/assets/icons/View.svg";
import { Card } from "shared/ui/Card";
import { Avatar } from "shared/ui/Avatar";
import { Button, ThemButton } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget } from "react";
import { USE_SESSIONSTORAGE_POSITION } from "shared/const/sessionStorage";
import { AppLink } from "shared/ui/AppLink";
import { getArticlesDetailsPage } from "shared/const/router";
import { AppImage } from "shared/ui/AppImage/AppImage";
import { Skeleton } from "shared/ui/Skeleton";
import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import cls from "./ArticleListIem.module.scss";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleBlockType } from "../../model/consts/consts";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  isLoading?: boolean;
  view?: ArticleView;
  isTarget?: boolean;
  target?: HTMLAttributeAnchorTarget;
  positionIndex?: number;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
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
      <div
        data-testId="ArticleListItem"
        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar size="30px" src={article.img} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          <Text text={article.type.join(", ")} className={cls.types} />
          <AppImage
            src={article.img}
            alt={article.title}
            className={cls.img}
            fallback={<Skeleton width="100%" height="250px" />}
          />
          {text && (
            <ArticleTextBlockComponent block={text} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              target={isTarget ? target : undefined}
              to={getArticlesDetailsPage(article.id)}
            >
              <Button onClick={setPositionIndex} theme={ThemButton.OUTLINE}>
                {t("Read")}
              </Button>
            </AppLink>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Icon={View} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      data-testId="ArticleListItem"
      target={isTarget ? target : undefined}
      to={getArticlesDetailsPage(article.id)}
    >
      <div
        onClick={setPositionIndex}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <AppImage
              src={article.img}
              className={cls.img}
              alt={article.title}
              fallback={<Skeleton width="200px" height="200px" />}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.inforWrapper}>
            <Text text={article.type.join(", ")} className={cls.types} />
            <Text text={String(article.views)} className={cls.views} />
            <Icon Icon={View} />
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </div>
    </AppLink>
  );
};
