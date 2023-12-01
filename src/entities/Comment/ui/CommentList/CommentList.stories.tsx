import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "entities/CommentList",
  component: CommentList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const withLoading: Story = {
  args: {
    isLoading: true,
    comments: [
      { id: "1", text: "test", user: { id: "1", username: "user" } },
      { id: "2", text: "test", user: { id: "2", username: "user" } },
    ],
  },
};
