import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileError } from "../../types/editableprofileCardSchema/editableProfileTypeSchema";
import { updateProfileData } from "./updateProfileData";

jest.mock("axios");

const newProfileData = {
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
  test("should return slice", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: newProfileData },
    });

    thunk.api.put.mockReturnValue(
      Promise.resolve({
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
      })
    );

    const result = await thunk.callThunk("1");

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toStrictEqual(newProfileData);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: newProfileData },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("should return another error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...newProfileData, first: "" } },
    });

    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
