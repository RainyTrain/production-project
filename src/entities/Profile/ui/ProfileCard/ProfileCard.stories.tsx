import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const WithData: Story = {
  args: {
    data: {
      first: "admin",
      second: "admin",
      age: 10,
      city: "London",
      username: "admin",
      currency: Currency.USD,
      country: Country.BELARUS,
      avatar:
        "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800037/61010821-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg",
    },
  },
};

export const Error: Story = {
  args: {
    error: "error",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
