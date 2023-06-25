import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);
describe("loginByUsername.test", () => {
  test("should return slice", async () => {
    const authData = { username: "admin", password: "123", id: "1" };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(authData)
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toBe(authData);
  });

  test("should return error", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toBe("Invalid username or password");
  });
});
