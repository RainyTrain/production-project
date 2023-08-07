import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleData } from "entities/Article";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { fetchCommentsByArticleId } from "pages/ArticlesDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
  const userData = getUserAuthData(thunkApi.getState());

  const article = getArticleData(thunkApi.getState());

  if (!userData || !article) {
    return thunkApi.rejectWithValue("no data");
  }

  try {
    const response = await thunkApi.extra.api.post<Comment>("/comments", {
      articleId: article?.id,
      userId: userData.id,
      text,
    });

    thunkApi.dispatch(fetchCommentsByArticleId(article.id));

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue("eror");
  }
});
