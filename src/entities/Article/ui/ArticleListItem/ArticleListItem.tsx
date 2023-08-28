import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "entities/Article/model/types/article";
import { AppLink, classNames } from "shared";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import View from "shared/assets/icons/View.svg";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget } from "react";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import { USE_SESSIONSTORAGE_POSITION } from "shared/const/sessionStorage";
import cls from "./ArticleListIem.module.scss";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

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
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size="30px" src={article.img} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          <Text text={article.type.join(", ")} className={cls.types} />
          <img src={article.img} alt={article.title} className={cls.img} />
          {text && (
            <ArticleTextBlockComponent block={text} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              target={isTarget ? target : undefined}
              to={`${RoutePath.articles_details}${article.id}`}
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
      target={isTarget ? target : undefined}
      to={`${RoutePath.articles_details}${article.id}`}
    >
      <div
        onClick={setPositionIndex}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <img src={article.img} className={cls.img} alt={article.title} />
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
