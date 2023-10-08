import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../const/theme";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: { theme: AppLinkTheme.PRIMARY, children: "test" },
};

export const Secondary: Story = {
  args: { theme: AppLinkTheme.SECONDARY, children: "test" },
};

export const PrimaryDark: Story = {
  args: { theme: AppLinkTheme.PRIMARY, children: "test" },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: { theme: AppLinkTheme.SECONDARY, children: "test" },
  decorators: [ThemeDecorator(Theme.DARK)],
};
