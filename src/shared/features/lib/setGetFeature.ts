import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "shared/const/localstorage";
import { FeatureFlag } from "shared/types/featureFlags";

export const defaultFeatures = {
  isAppReDesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === "new",
};

let featureFlags: FeatureFlag = { ...defaultFeatures };

export const setGetFeatureFlags = (newFeatureFlags: FeatureFlag) => {
  featureFlags = newFeatureFlags;
};

export const getFeatureFlags = (flag: keyof FeatureFlag) => featureFlags[flag];

export const getAllFeatures = () => featureFlags;
