import { rtlApi } from "shared/api/rtk";
import { FeatureFlag } from "shared/types/featureFlags";

interface UpdateFeatureFlags {
  userId: string;
  feature: Partial<FeatureFlag>;
}

export const featureFlagsApi = rtlApi.injectEndpoints({
  endpoints: (builder) => ({
    updateFeatureFlags: builder.mutation<void, UpdateFeatureFlags>({
      query: ({ userId, feature }) => ({
        method: "PATCH",
        url: `/users/${userId}`,
        body: { feature },
      }),
    }),
  }),
});

export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate;
