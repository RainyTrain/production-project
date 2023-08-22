import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../../services/fetchArticleRecommendations/fetchArticleRecommendations";
import { ArticleDetailsPageRecommendationsSchema } from "../../types/ArticleDetailsPageRecommendationSchema";

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  );

const articleDetailsPageRecommendationSlice = createSlice({
  name: "articleDetailsCommentSlice",
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticleRecommendations.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// export const { action: articleDetailsCommentSliceAction } =
//   articleDetailsCommentSlice.actions;
export const { reducer: articleDetailsPageRecommendationSliceReduce } =
  articleDetailsPageRecommendationSlice;
