import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/ui/ThemeProvider";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: { username: "test", password: "123" } }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { username: "test", password: "123" } }),
  ],
};

export const LoadingDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { error: "Error", isLoading: true } }),
  ],
};
