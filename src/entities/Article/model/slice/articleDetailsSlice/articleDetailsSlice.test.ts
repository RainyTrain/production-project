import { getArticleById } from "../../services/getArticleById/getArticleById";
import { Article } from "../../types/article";
import { ArticleDetailsSchema } from "../../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailsSlice";

describe("articleDetailsSlice", () => {
  test("pending", () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      data: undefined,
      error: "error",
    };

    const result = articleDetailsReducer(
      initialState as ArticleDetailsSchema,
      getArticleById.pending
    );

    expect(result).toEqual({ isLoading: true, error: "error" });
  });

  test("fulfilled", () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      data: undefined,
      error: "error",
    };

    const result = articleDetailsReducer(
      initialState as ArticleDetailsSchema,
      getArticleById.fulfilled({ id: "1", img: "img" } as Article, "", "")
    );

    expect(result).toEqual({
      isLoading: false,
      error: "error",
      data: { id: "1", img: "img" },
    });
  });

  test("rejected", () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      data: undefined,
      error: "error",
    };

    const result = articleDetailsReducer(
      initialState as ArticleDetailsSchema,
      getArticleById.rejected(Error("error"), "", "")
    );

    expect(result).toEqual({ isLoading: false });
  });
});
