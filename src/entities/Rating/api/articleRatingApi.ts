import { rtlApi } from "shared/api/rtk";
import { Rating } from "../model/types/rating";

interface GetArticlesRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtlApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticlesRatingArg>({
      query: ({ userId, articleId }) => ({
        url: "/article-ratings",
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: "/article-ratings",
        body: arg,
        method: "POST",
      }),
    }),
  }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
