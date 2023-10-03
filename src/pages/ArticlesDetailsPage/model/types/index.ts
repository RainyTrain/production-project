import { ArticleDetailsCommentSchema } from "./ArticleDetailsCommentSchema";
import { ArticleDetailsPageRecommendationsSchema } from "./ArticleDetailsPageRecommendationSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommendations: ArticleDetailsPageRecommendationsSchema;
}
