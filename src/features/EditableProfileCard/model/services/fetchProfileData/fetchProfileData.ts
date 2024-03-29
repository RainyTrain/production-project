import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";
import i18n from "shared/config/i18n/i18n";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>("profile/loginByUsername", async (profileId, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<Profile>(
      `/profile/${profileId}`
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(i18n.t("Invalid username or password"));
  }
});
