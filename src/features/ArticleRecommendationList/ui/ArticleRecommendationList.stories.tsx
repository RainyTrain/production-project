import type { Meta, StoryObj } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import {
  ArticleBlockType,
  ArticleType,
} from "entities/Article/model/types/article";
import { UserRole } from "entities/User/model/types/userSchema";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
// import withMock from "storybook-addon-mock";
import { ArticleRecommendationList } from "./ArticleRecommendationList";

const meta: Meta<typeof ArticleRecommendationList> = {
  title: "features/ArticleRecommendationList",
  component: ArticleRecommendationList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationList>;

const article: Article = {
  id: "1",
  title: "1",
  subtitle: "1",
  img: "1",
  views: 1,
  createdAt: "1",
  type: [ArticleType.IT],
  blocks: [],
  user: { id: "1", username: "1", avatar: "1", roles: [UserRole.ADMIN] },
};

export const WithData: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [{ ...article }, { ...article }, { ...article }],
      },
    ],
  },
  decorators: [StoreDecorator({})],
};
