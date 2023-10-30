import { FeatureFlag } from "shared/types/featureFlags";
import { getFeatureFlags } from "./setGetFeature";

interface ToggleFeatureOptions<T> {
  name: keyof FeatureFlag;
  on: () => T;
  off: () => T;
}

export const toggleFeature = <T>({
  name,
  on,
  off,
}: ToggleFeatureOptions<T>): T => {
  if (getFeatureFlags(name)) {
    return on();
  }
  return off();
};
