import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { ArticlesDetailsPage } from "../../../ArticlesDetailsPage";

const meta: Meta<typeof ArticlesDetailsPage> = {
  title: "pages/ArticlesDetailsPage",
  component: ArticlesDetailsPage,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    router: {
      path: "/articles/:id",
      route: "/articles/1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticlesDetailsPage>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
