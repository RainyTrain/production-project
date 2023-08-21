import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
  ArticleSortField,
  ArticleType,
} from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import { getArticlesPageInited } from "../../selectors/getArticlesPageSelectors";
import { articlesPageAction } from "../../slice/articlesPageSlice";
import { fetchArticleList } from "../fetchArticleList";

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlePage/initArticlePage", async (params, thunkAPI) => {
  const inited = getArticlesPageInited(thunkAPI.getState());

  if (!inited) {
    const sortFromUrl = params.get("sort") as ArticleSortField;
    const orderFromUrl = params.get("order") as SortOrder;
    const searchFromUrl = params.get("search");
    const typeFromUrl = params.get("type");

    thunkAPI.dispatch(articlesPageAction.initState());

    if (sortFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setSort(sortFromUrl));
    }

    if (orderFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setOrder(orderFromUrl));
    }

    if (searchFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      thunkAPI.dispatch(articlesPageAction.setType(typeFromUrl as ArticleType));
    }

    thunkAPI.dispatch(fetchArticleList({}));
  }
});
