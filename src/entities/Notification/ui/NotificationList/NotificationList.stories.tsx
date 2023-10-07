import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/ui/ThemeProvider";
import { NotificationList } from "./NotificationList";
import { Notification } from "../../model/types/notification";

const meta: Meta<typeof NotificationList> = {
  title: "entites/NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

const notification: Notification = {
  description: "qwerty",
  id: "1",
  title: "test",
};

export const WithData: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [{ ...notification }],
      },
    ],
  },
  decorators: [StoreDecorator({})],
};

export const WithSkeleton: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [{ ...notification }],
        delay: 5000,
      },
    ],
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
