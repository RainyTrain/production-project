import { FeatureFlag } from "shared/types/featureFlags";

let featureFlags: FeatureFlag = {};

export const setGetFeatureFlags = (newFeatureFlags: FeatureFlag) => {
  featureFlags = newFeatureFlags;
};

export const getFeatureFlags = (flag: keyof FeatureFlag) => featureFlags[flag];
