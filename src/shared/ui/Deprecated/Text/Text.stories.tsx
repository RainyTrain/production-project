import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../../const/theme";
import { Text, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Title: Story = {
  args: {
    title: "title",
  },
};

export const text: Story = {
  args: {
    text: "text",
  },
};

export const TextTitle: Story = {
  args: {
    text: "text",
    title: "title",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    text: "text",
    title: "title",
    theme: TextTheme.ERROR,
  },
};
