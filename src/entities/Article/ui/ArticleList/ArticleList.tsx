import { Article, ArticleView } from "entities/Article/model/types/article";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "shared";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  isTarget?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = "SMALL",
    target,
    isTarget,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      isTarget
      key={article.id}
      article={article}
      view={view}
      target={target}
    />
  );

  const getSkeletons = (view: ArticleView) =>
    new Array(view === "BIG" ? 4 : 9)
      .fill(0)
      .map((element, index) => <ArticleListItemSkeleton view={view} />);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title="No articles found"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 && articles.map(renderArticle)}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
