import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AddCommentForm from "./AddCommentForm";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
