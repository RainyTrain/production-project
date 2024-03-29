import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import i18n from "shared/config/i18n/i18n";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>("profile/loginByUsername", async (articleId, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Comment[]>(`/comments`, {
      params: { articleId, _expand: "user" },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(i18n.t("Invalid username or password"));
  }
});
