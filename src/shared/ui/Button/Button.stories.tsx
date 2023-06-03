import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../ThemeProvider";
import { Button, ButtonSize, ThemButton } from "./Button";

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

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    children: "Text",
    theme: ThemButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text",
    theme: ThemButton.BACKGROUND_INVERTED,
  },
};

export const M: Story = {
  args: {
    children: "T",
    square: true,
    size: ButtonSize.M,
  },
};

export const L: Story = {
  args: {
    children: "T",
    square: true,
    size: ButtonSize.L,
  },
};

export const XL: Story = {
  args: {
    children: "T",
    square: true,
    size: ButtonSize.Xl,
  },
};
