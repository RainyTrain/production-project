import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/ui/ThemeProvider";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const LightWithUser: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { id: "1", username: "admin" } } }),
  ],
};

export const DarkWithoutUser: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: undefined } }),
    ThemeDecorator(Theme.DARK),
  ],
};
