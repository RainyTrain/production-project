import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../ThemeProvider";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: "test",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: "test",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
