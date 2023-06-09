import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/ui/ThemeProvider";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = {
  args: {},
};
