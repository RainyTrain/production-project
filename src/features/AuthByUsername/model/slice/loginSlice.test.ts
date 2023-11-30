import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginShema } from "../types/loginShema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("should return username", () => {
    const state: DeepPartial<LoginShema> = {
      username: "admin",
    };
    expect(
      loginReducer(state as LoginShema, loginActions.setUserName("qwerty"))
    ).toStrictEqual({ username: "qwerty" });
  });

  test("should return password", () => {
    const state: DeepPartial<LoginShema> = {
      password: "admin",
    };
    expect(
      loginReducer(state as LoginShema, loginActions.setPassword("123"))
    ).toStrictEqual({ password: "123" });
  });

  test("should return isLoading", () => {
    const state: DeepPartial<LoginShema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      loginReducer(state as LoginShema, loginByUsername.pending)
    ).toStrictEqual({ isLoading: true, error: undefined });
  });
});
  