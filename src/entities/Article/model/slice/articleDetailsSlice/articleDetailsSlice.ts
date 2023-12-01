import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getArticleById } from "../../services/getArticleById/getArticleById";
import { Article } from "../../types/article";
import { ArticleDetailsSchema } from "../../types/articleDetailsSchema";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(getArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleDetailsAction } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
