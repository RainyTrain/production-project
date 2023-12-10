import { StoryFn } from "@storybook/react";
import { setGetFeatureFlags } from "shared/features";
import { FeatureFlag } from "shared/types/featureFlags";

export const FeaturesFlagsDecorator =
  (flags: FeatureFlag) => (Story: StoryFn) => {
    setGetFeatureFlags({ ...flags });
    return <Story />;
  };
