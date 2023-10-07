import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
describe("loginByUsername.test", () => {
  test("should return slice", async () => {
    const authData = { username: "admin", password: "123", id: "1" };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: authData }));

    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(authData)
    );
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toBe(authData);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toBe("Invalid username or password");
  });
});
