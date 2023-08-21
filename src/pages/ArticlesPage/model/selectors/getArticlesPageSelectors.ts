import { StateSchema } from "app/providers/StoreProvider";
import {
  ArticleSortField,
  ArticleType,
} from "entities/Article/model/types/article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlePage?.view || "SMALL";

export const getArticlesPageError = (state: StateSchema) =>
  state.articlePage?.error;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlePage?.limit || 2;

export const getArticlesPagePage = (state: StateSchema) =>
  state.articlePage?.page || 1;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlePage?.hasmore;

export const getArticlesPageInited = (state: StateSchema) =>
  state.articlePage?._inited;

export const getArticlesPageOrder = (state: StateSchema) =>
  state.articlePage?.order || "asc";

export const getArticlesPageSort = (state: StateSchema) =>
  state.articlePage?.sort || ArticleSortField.CREATED;

export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlePage?.search ?? "";

export const getArticlesPageType = (state: StateSchema) =>
  state.articlePage?.type || ArticleType.ALL;
