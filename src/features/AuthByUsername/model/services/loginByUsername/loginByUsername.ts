import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USE_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<User>("/login", authData);

    localStorage.setItem(USE_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    if (!response.data) {
      throw new Error();
    }

    // thunkAPI.extra.navigate("/profile");

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(i18n.t("Invalid username or password"));
  }
});
