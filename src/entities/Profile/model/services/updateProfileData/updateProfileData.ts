import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());

  const errors = validateProfileData(formData!);

  if (errors.length) {
    return thunkAPI.rejectWithValue(errors);
  }

  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      "/profile",
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(i18n.t("Invalid username or password"));
    return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
