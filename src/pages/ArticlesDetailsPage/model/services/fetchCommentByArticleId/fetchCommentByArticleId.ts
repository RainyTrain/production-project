import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>("profile/loginByUsername", async (articleId, thunkAPI) => {
  try {
    console.log("I HAVE GOT USERS");
    const response = await thunkAPI.extra.api.get<Comment[]>(`/comments`, {
      params: { articleId, _expand: "user" },
    });

    console.log("I HAVE GOT USERS", response.data);

    if (!response.data) {
      throw new Error();
    }
    console.log("I HAVE GOT USERS", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(i18n.t("Invalid username or password"));
  }
});
