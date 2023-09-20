import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleSortField, ArticleType } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  hasmore: boolean;
  limit?: number;
  page: number;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  _inited: boolean;
  type: ArticleType;
}
