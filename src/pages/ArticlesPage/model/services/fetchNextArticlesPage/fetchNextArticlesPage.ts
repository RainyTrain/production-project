import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPagePage,
} from "../../selectors/getArticlesPageSelectors";
import { articlesPageAction } from "../../slice/articlesPageSlice";
import { fetchArticleList } from "../fetchArticleList";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlePage/fetchNextArticleList", async (_, thunkAPI) => {
  const hasMore = getArticlesPageHasMore(thunkAPI.getState());

  const page = getArticlesPagePage(thunkAPI.getState());

  const isLoading = getArticlesPageIsLoading(thunkAPI.getState());

  if (hasMore && !isLoading) {
    thunkAPI.dispatch(articlesPageAction.setPage(page + 1));
    thunkAPI.dispatch(fetchArticleList({ page: page + 1 }));
  }
});
