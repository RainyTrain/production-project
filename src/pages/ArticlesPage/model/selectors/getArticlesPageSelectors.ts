import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlePage?.view || "SMALL";

export const getArticlesPageError = (state: StateSchema) =>
  state.articlePage?.error;
