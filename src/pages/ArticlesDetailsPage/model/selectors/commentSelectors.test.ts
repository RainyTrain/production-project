import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "./commentSelectors";

describe("commentSelectors", () => {
  test("getArticleCommentsIsLoading", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetailsComments: {
        error: "error",
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("getArticleCommentsError", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetailsComments: {
        error: "error",
        isLoading: true,
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
  });
});
