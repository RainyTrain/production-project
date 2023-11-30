import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from "./getArticleSelector";

const state: DeepPartial<StateSchema> = {
  articleDetails: {
    data: { id: "1", title: "test" },
    error: "error",
    isLoading: true,
  },
};
describe("get article selecotr", () => {
  test("get data", () => {
    expect(getArticleData(state as StateSchema)).toStrictEqual({
      id: "1",
      title: "test",
    });
  });

  test("get isLoading", () => {
    expect(getArticleIsLoading(state as StateSchema)).toStrictEqual(true);
  });

  test("get error", () => {
    expect(getArticleError(state as StateSchema)).toStrictEqual("error");
  });
});
