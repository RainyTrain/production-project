import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "shared/const/theme";
import { ProfilePage } from "..";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const WithData: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};
