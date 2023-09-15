import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("selector testing", () => {
  test("getProfileData", () => {
    const data = "error";

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: data,
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual(data);
  });
  test("getUndefined", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
