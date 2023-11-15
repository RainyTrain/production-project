import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Alt: Story = {
  args: {
    label: "Currency",
    options: [
      { content: "1", value: "1" },
      { content: "2", value: "2" },
    ],
  },
};
