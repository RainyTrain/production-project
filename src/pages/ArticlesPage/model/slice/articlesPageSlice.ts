import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { ARTICLES_VIEW_LOCALSOTRAGE_KEY } from "shared/const/localstorage";
import { fetchArticleList } from "../services/fetchArticleList";
import { ArticlePageSchema } from "../types/articlesPageSchema";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    entities: {},
    ids: [],
    error: undefined,
    isLoading: false,
    view: "SMALL",
    hasmore: true,
    page: 1,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSOTRAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSOTRAGE_KEY
      ) as ArticleView;

      state.view = view || "SMALL";
      state.limit = view === "SMALL" ? 9 : 4;
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticleList.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.setMany(state, action.payload);
        state.hasmore = action.payload.length > 0;
      }
    );
    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesPageAction } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
