import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../const/theme";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Alt: Story = {
  args: { alt: "Avatar" },
};

export const Src: Story = {
  args: {
    size: "100px",
    src: "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800037/61010821-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
