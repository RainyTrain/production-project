import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticleList } from "../fetchArticleList";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";

jest.mock("../fetchArticleList");
describe("fetchNextArticlesPage.test", () => {
  test("should return paginated articles", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        hasmore: true,
        page: 1,
        limit: 5,
        ids: [],
        entities: {},
        isLoading: false,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalledWith({ page: 2 });
  });
  test("should not return paginated articles", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlePage: {
        hasmore: false,
        page: 1,
        limit: 5,
        ids: [],
        entities: {},
        isLoading: false,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalledWith({ page: 2 });
  });
});
