import { StateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";

describe("getUserAuthData", () => {
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: "1", username: "admin" } },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: "1",
      username: "admin",
    });
  });
});
