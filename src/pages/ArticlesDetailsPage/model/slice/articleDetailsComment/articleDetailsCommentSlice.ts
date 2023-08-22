import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../../services/fetchCommentByArticleId/fetchCommentByArticleId";
import { ArticleDetailsCommentSchema } from "../../types/ArticleDetailsCommentSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentSlice = createSlice({
  name: "articleDetailsCommentSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// export const { action: articleDetailsCommentSliceAction } =
//   articleDetailsCommentSlice.actions;
export const { reducer: articleDetailsCommentSliceReducer } =
  articleDetailsCommentSlice;
