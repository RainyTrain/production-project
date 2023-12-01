import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { setJsonSettings } from "../../api/userApi";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { JsonSettings } from "../types/jsonSettings";

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>("user/saveJsonSettings", async (settings, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());

  if (!userData) {
    return thunkAPI.rejectWithValue("error");
  }

  try {
    const response = await thunkAPI
      .dispatch(
        setJsonSettings({
          userId: userData.id,
          jsonSettings: { ...userData.jsonSettings, ...settings },
        })
      )
      .unwrap();

    if (!response.jsonSettings) {
      return thunkAPI.rejectWithValue("error");
    }

    return response.jsonSettings;
  } catch (error) {
    return thunkAPI.rejectWithValue("error");
  }
});
