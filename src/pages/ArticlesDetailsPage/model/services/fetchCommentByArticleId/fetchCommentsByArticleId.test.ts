import { Comment } from "entities/Comment";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchCommentsByArticleId } from "./fetchCommentByArticleId";

jest.mock("axios");
describe("fetchCommentsByArticleId.test", () => {
  test("should return comments", async () => {
    const getComments: Comment[] = [
      { id: "1", text: "test", user: { id: "1", username: "admin" } },
    ];

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: [{ id: "1", text: "test", user: { id: "1", username: "admin" } }],
      })
    );

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toStrictEqual(getComments);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("2");

    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
