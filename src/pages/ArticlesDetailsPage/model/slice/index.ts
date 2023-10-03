import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentSliceReducer } from "./articleDetailsComment/articleDetailsCommentSlice";
import { articleDetailsPageRecommendationSliceReduce } from "./articleDetailsPageRecommendations/articleDetailsPageRecommendations";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationSliceReduce,
  comments: articleDetailsCommentSliceReducer,
});
