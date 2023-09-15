import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Profile } from "entities/Profile";
import { ValidateProfileError } from "../../types/editableprofileCardSchema/editableProfileTypeSchema";
import { validateProfileData } from "./validateProfileData";

const profile: Profile = {
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
describe("loginByUsername.test", () => {
  test("INCORRECT_USER_DATA", async () => {
    expect(validateProfileData({ ...profile, first: "" })).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test("NO_DATA", async () => {
    expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("ARRAY OF ERRORS", async () => {
    expect(validateProfileData({})).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
