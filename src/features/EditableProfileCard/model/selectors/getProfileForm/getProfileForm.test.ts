import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("selector testing", () => {
  test("getProfileData", () => {
    const data = {
      first: "admin",
      second: "admin",
      age: 10,
      city: "London",
      username: "admin",
      currency: Currency.USD,
      country: Country.BELARUS,
      avatar:
        "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800037/61010821-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg",
    };

    const state: DeepPartial<StateSchema> = {
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
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test("getUndefined", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
