import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());
  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      "/profile",
      formData
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(i18n.t("Invalid username or password"));
  }
});
