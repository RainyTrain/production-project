import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USE_LOCALSTORAGE_KEY,
} from "shared/const/localstorage";
import { getUserDataById } from "../../api/userApi";
import { User } from "../types/userSchema";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  "user/initAuthData",
  async (_, thunkAPI) => {
    const userId = localStorage.getItem(USE_LOCALSTORAGE_KEY);

    if (!userId) {
      return thunkAPI.rejectWithValue("error");
    }

    try {
      const response = await thunkAPI
        .dispatch(getUserDataById(JSON.parse(userId)))
        .unwrap();

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.feature?.isAppReDesigned ? "new" : "old"
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
