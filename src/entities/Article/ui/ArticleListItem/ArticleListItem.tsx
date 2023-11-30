import { HTMLAttributeAnchorTarget } from "react";
import { ToggleFeatures } from "shared/features";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import { ArticleItemRedesigned } from "./ArticleListItemRedesigned/ArticleItemRedesigned";

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  isLoading?: boolean;
  view?: ArticleView;
  isTarget?: boolean;
  target?: HTMLAttributeAnchorTarget;
  positionIndex?: number;
}

export const ArticleListItem = (props: ArticleListItemProps) => (
  <ToggleFeatures
    feature="isAppReDesigned"
    on={<ArticleItemRedesigned {...props} />}
    off={<ArticleListItemSkeleton {...props} />}
  />
);
