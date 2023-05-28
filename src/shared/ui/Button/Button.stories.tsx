import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "text",
  },
};

export const Secondary: Story = {
  args: {
    children: "text",
    theme: ThemButton.CLEAR,
  },
};
