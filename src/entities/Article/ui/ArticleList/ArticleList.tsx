import { Article, ArticleView } from "entities/Article/model/types/article";
import { memo } from "react";
import { classNames } from "shared";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = "SMALL" } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} />
  );

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
  //       {new Array(8).fill(0).map((element) => (
  //         <ArticleListItemSkeleton view={view} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 && articles.map(renderArticle)}
      {isLoading &&
        new Array(8)
          .fill(0)
          .map((element) => <ArticleListItemSkeleton view={view} />)}
    </div>
  );
});
