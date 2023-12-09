import { PayloadAction } from "@reduxjs/toolkit";
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USE_LOCALSTORAGE_KEY,
} from "shared/const/localstorage";
import { setGetFeatureFlags } from "shared/features";
import { buildSlice } from "shared/lib/store/buildSlice";
import { initAuthData } from "../services/initAuthData";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { JsonSettings } from "../types/jsonSettings";
import { User, UserSchema } from "../types/userSchema";

const initialState: UserSchema = { _inited: false };

export const userSlice = buildSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      if (action.payload.feature) {
        setGetFeatureFlags(action.payload.feature);
      }
      localStorage.setItem(USE_LOCALSTORAGE_KEY, action.payload.id);
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        action.payload.feature?.isAppReDesigned ? "new" : "old"
      );
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USE_LOCALSTORAGE_KEY);
      localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, "old");
      setGetFeatureFlags({});
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = { ...action.payload };
        }
      }
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.authData = action.payload;
        if (action.payload.feature) {
          setGetFeatureFlags(action.payload.feature);
        }
        state._inited = true;
      }
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
export const { useActions: userUseActions } = userSlice;
