import { ReactElement } from "react";
import { FeatureFlag } from "shared/types/featureFlags";
import { getFeatureFlags } from "../../lib/setGetFeature";

interface ToggleFeatureProps {
  feature: keyof FeatureFlag;
  off: ReactElement;
  on: ReactElement;
}

export const ToggleFeatures = ({ feature, off, on }: ToggleFeatureProps) => {
  if (getFeatureFlags(feature)) {
    return on;
  }
  return off;
};
