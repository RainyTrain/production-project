import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { ArticleDetails } from "./ArticleDetails";

const meta: Meta<typeof ArticleDetails> = {
  title: "entities/ArticleDetails",
  component: ArticleDetails,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Dark: Story = {
  args: {
    id: "1",
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        data: {
          id: "1",
          img: "https://media.istockphoto.com/id/1433211776/photo/woman-silhouette-in-front-of-the-ocean-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=xGzw_4wTjK0uKJLS42lR7xPsD7tGRTrx-mWBl0ylih4=",
          subtitle: "hello",
          createdAt: "today",
          views: 122,
        },
      },
    }),
  ],
};
