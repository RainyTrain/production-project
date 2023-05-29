import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../ThemeProvider";
import { Button, ThemButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: ThemButton.CLEAR,
  },
};

export const Tertiary: Story = {
  args: {
    children: "Text",
    theme: ThemButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
