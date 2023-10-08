import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../const/theme";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = {
  args: {},
};
