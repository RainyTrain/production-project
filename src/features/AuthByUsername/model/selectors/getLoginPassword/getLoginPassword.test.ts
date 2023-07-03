import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
  test("should return qwerty", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "qwerty",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('qwerty');
  });
  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
