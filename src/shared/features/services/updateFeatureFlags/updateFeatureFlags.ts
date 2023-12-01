import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { FeatureFlag } from "shared/types/featureFlags";
import { getAllFeatures } from "../../lib/setGetFeature";
import { updateFeatureFlagsMutation } from "../../api/featureFlagsApi";

interface UpdateFeatureOptions {
  userId: string;
  newFeatures: Partial<FeatureFlag>;
}

export const updateFeatureFlags = createAsyncThunk<
  void,
  UpdateFeatureOptions,
  ThunkConfig<string>
>(
  "featureFlags/updateFeatureFlags",
  // eslint-disable-next-line consistent-return
  async ({ newFeatures, userId }, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    try {
      await dispatch(
        updateFeatureFlagsMutation({
          feature: { ...getAllFeatures(), ...newFeatures },
          userId,
        })
      );
      window.location.reload();
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
