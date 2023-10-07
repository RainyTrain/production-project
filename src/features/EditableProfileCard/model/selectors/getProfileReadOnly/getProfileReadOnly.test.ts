import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("selector testing", () => {
  test("getProfileData", () => {
    const data = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadOnly(state as StateSchema)).toEqual(data);
  });
  test("getUndefined", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
