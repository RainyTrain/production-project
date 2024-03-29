import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../../const/theme";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/Redesigned/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: "test",
    placeholder: "value",
    autofocus: true,
  },
};

export const Dark: Story = {
  args: {
    value: "test",
    placeholder: "value",
    autofocus: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
