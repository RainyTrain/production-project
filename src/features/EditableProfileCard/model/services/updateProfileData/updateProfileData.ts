import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { ValidateProfileError } from "../../types/editableprofileCardSchema/editableProfileTypeSchema";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (profileId, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());

  const errors = validateProfileData(formData!);

  if (errors.length) {
    return thunkAPI.rejectWithValue(errors);
  }

  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      `/profile/${profileId}`,
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
