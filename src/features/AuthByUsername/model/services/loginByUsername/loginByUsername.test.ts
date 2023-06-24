import { StateSchema } from "app/providers/StoreProvider";
import axios from "axios";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);
describe("loginByUsername.test", () => {
  test("should return slice", () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { username: "admin", password: "123", id: 1 } })
    );
    const action = loginByUsername({username:'admin',password:'123'})
    // expect(loginByUsername()).toEqual();
  });
});
