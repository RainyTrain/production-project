import { StoryFn } from "@storybook/react";
import { setGetFeatureFlags } from "shared/features";
import { getAllFeatures } from "shared/features/lib/setGetFeature";

export const NewDesignDecorator = (Story: StoryFn) => {
  setGetFeatureFlags({ ...getAllFeatures(), isAppReDesigned: true });
  return (
    <div className="app_redesigned">
      <Story />
    </div>
  );
};
