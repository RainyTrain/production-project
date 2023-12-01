import { Article } from "entities/Article";
import { rtlApi } from "shared/api/rtk";

export const recommendationsApi = rtlApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendationsList: builder.query<Article[], number>({
      query: (limit) => ({
        url: "/articles",
        params: { _limit: limit, _expand: "user" },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetRecommendationsListQuery;
