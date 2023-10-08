import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widget/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = {
  args: {},
};
