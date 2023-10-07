import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../selectors/getArticlesPageSelectors";

interface FetchArticleList {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleList,
  ThunkConfig<string>
>("articlePage/fetchArticleList", async ({ replace }, thunkAPI) => {
  const limit = getArticlesPageLimit(thunkAPI.getState());
  const page = getArticlesPagePage(thunkAPI.getState());
  const sort = getArticlesPageSort(thunkAPI.getState());
  const order = getArticlesPageOrder(thunkAPI.getState());
  const search = getArticlesPageSearch(thunkAPI.getState());
  const type = getArticlesPageType(thunkAPI.getState());

  try {
    addQueryParams({ sort, order, search, type });

    const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        type_like: type === ArticleType.ALL ? undefined : type,
        q: search,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("error");
  }
});
