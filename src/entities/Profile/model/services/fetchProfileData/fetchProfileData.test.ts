import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

jest.mock("axios");
describe("loginByUsername.test", () => {
  test("should return slice", async () => {
    const profileData = {
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

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.getState()
    thunk.api.get.mockReturnValue(
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

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toStrictEqual(profileData);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
