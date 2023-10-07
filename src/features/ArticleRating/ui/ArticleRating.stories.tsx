import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/ui/ThemeProvider";
import { ArticleRating } from "./ArticleRating";

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const WithData: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?articleId=1&userId=1`,
        method: "GET",
        status: 200,
        response: [
          {
            rate: 2,
          },
        ],
      },
    ],
  },
  decorators: [
    StoreDecorator({ user: { authData: { id: "1", username: "admin" } } }),
  ],
};

export const WithoutData: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?articleId=1&userId=1`,
        method: "GET",
        status: 200,
        delay: 200,
      },
    ],
  },
  decorators: [
    StoreDecorator({ user: { authData: { id: "1", username: "admin" } } }),
    ThemeDecorator(Theme.DARK),
  ],
};
