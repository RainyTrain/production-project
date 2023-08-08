import { AddCommentSchema } from "../types/addCommentFormSchema";
import { addCommentActions, addCommentReducer } from "./addCommentSlice";

jest.mock("axios");
describe("addCommentSlice", () => {
  test("should return slice", () => {
    const state: DeepPartial<AddCommentSchema> = {
      error: "error",
      text: "",
    };

    expect(
      addCommentReducer(
        state as AddCommentSchema,
        addCommentActions.setText("test")
      )
    ).toEqual({ error: "error", text: "test" });
  });
});
