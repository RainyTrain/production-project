import { Comment } from "entities/Comment";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";

jest.mock("axios");
describe("fetchCommentsByArticleId.test", () => {
  test("should add new comment", async () => {
    const newComment: Comment = {
      id: "1",
      text: "test",
      user: { id: "1", username: "admin" },
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: "1", username: "admin" } },
      articleDetails: { data: { id: "1" } },
    });

    thunk.getState();

    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: { id: "1", text: "test", user: { id: "1", username: "admin" } },
      })
    );

    const result = await thunk.callThunk("test");

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toStrictEqual(newComment);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: "1", username: "admin" } },
      articleDetails: { data: { id: "1" } },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("test");

    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
