import { StateSchema } from "app/providers/StoreProvider";

export const getRecommendsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.isLoading;

export const getRecommendsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.error;
