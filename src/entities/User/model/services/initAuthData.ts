import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { USE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
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

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
