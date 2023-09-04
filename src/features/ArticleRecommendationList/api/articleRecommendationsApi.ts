import { rtlApi } from "shared/api/rtk";

export const recommendationsApi = rtlApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendationsList: builder.query({
      query: (limit) => ({
        url: "/articles",
        params: { _limit: limit },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetRecommendationsListQuery;
