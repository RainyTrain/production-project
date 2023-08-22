import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articlePage/fetchArticleList", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: 4,
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
