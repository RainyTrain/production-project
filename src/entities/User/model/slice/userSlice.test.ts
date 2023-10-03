import { UserSchema } from "../types/userSchema";
import { userActions, userReducer } from "./userSlice";

jest.mock("axios");
describe("userSlice", () => {
  let initialState: DeepPartial<UserSchema>;

  beforeEach(() => {
    initialState = { _inited: false, authData: undefined };
  });

  test("setAuthData", () => {
    expect(
      userReducer(
        initialState as UserSchema,
        userActions.setAuthData({ id: "1", username: "test" })
      )
    ).toStrictEqual({
      _inited: false,
      authData: { id: "1", username: "test" },
    });
  });

  test("initAuthData", () => {
    expect(
      userReducer(initialState as UserSchema, userActions.initAuthData)
    ).toStrictEqual({
      _inited: true,
      authData: undefined,
    });
  });

  test("logout", () => {
    expect(
      userReducer(initialState as UserSchema, userActions.logout)
    ).toStrictEqual({
      _inited: false,
      authData: undefined,
    });
  });
});
