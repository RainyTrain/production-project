import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormError, getAddCommentFormText } from "./addCommentFromSelectors";

describe("selector testing", () => {
  test("getAddCommentFormText", () => {
    const state: DeepPartial<StateSchema> = {
      addComment: {
        text: "test",
      },
    };

    expect(getAddCommentFormText(state as StateSchema)).toEqual("test");
  });
  test("getAddCommentFormError", () => {
    const state: DeepPartial<StateSchema> = {
      addComment: {
        error: "error",
      },
    };

    expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
  });
});
