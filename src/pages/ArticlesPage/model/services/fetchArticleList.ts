import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../selectors/getArticlesPageSelectors";

interface FetchArticleList {
  page: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleList,
  ThunkConfig<string>
>("articlePage/fetchArticleList", async (props, thunkAPI) => {
  const { page = 1 } = props;

  const limit = getArticlesPageLimit(thunkAPI.getState());

  try {
    const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
      params: { _expand: "user", _page: page, _limit: limit },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("error");
  }
});
