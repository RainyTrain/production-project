import { fetchCommentsByArticleId } from "../services/fetchCommentByArticleId/fetchCommentByArticleId";
import { ArticleDetailsCommentSchema } from "../types/ArticleDetailsCommentSchema";
import { articleDetailsCommentSliceReducer } from "./articleDetailsCommentSlice";

jest.mock("axios");

const state: DeepPartial<ArticleDetailsCommentSchema> = {
  entities: {
    "1": {
      id: "1",
      text: "user1",
      user: { id: "1", username: "admin" },
    },
    "2": {
      id: "2",
      text: "user2",
      user: { id: "2", username: "admin" },
    },
  },
  ids: ["1", "2"],
  error: "",
  isLoading: false,
};

describe("fetchCommentsByArticleId.test", () => {
  test("fetchCommentsByArticleId.pending", async () => {
    expect(
      articleDetailsCommentSliceReducer(
        {
          entities: {
            "1": {
              id: "1",
              text: "user1",
              user: { id: "1", username: "admin" },
            },
            "2": {
              id: "2",
              text: "user2",
              user: { id: "2", username: "admin" },
            },
          },
          ids: ["1", "2"],
          error: "",
          isLoading: false,
        },
        fetchCommentsByArticleId.pending
      )
    ).toStrictEqual({ ...state, isLoading: true });
  });

  test("fetchCommentsByArticleId.fulfilled", async () => {
    expect(
      articleDetailsCommentSliceReducer(
        {
          entities: {},
          ids: [],
          error: "",
          isLoading: false,
        },
        fetchCommentsByArticleId.fulfilled(
          [{ text: "test", user: { id: "1", username: "admin" }, id: "1" }],
          "",
          ""
        )
      )
    ).toStrictEqual({
      entities: {
        "1": { text: "test", user: { id: "1", username: "admin" }, id: "1" },
      },
      ids: ["1"],
      error: "",
      isLoading: false,
    });
  });

  test("fetchCommentsByArticleId.rejected", async () => {
    expect(
      articleDetailsCommentSliceReducer(
        {
          entities: {},
          ids: [],
          error: "",
          isLoading: false,
        },
        fetchCommentsByArticleId.rejected(
          { message: "error", name: "error" },
          "",
          ""
        )
      )
    ).toStrictEqual({
      entities: {},
      ids: [],
      error: undefined,
      isLoading: false,
    });
  });
});
