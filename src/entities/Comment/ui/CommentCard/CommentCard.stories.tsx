import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "entities/CommentCard",
  component: CommentCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const withLoading: Story = {
  args: {
    isLoading: true,
    comment: { id: "1", text: "test", user: { id: "1", username: "user" } },
  },
};

export const withDataLight: Story = {
  args: {
    isLoading: false,
    comment: { id: "1", text: "test", user: { id: "1", username: "user" } },
  },
};

export const withDataDark: Story = {
  args: {
    isLoading: false,
    comment: { id: "1", text: "test", user: { id: "1", username: "user" } },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
