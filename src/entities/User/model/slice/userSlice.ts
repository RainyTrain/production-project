import { PayloadAction } from "@reduxjs/toolkit";
import { USE_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { setGetFeatureFlags } from "shared/features";
import { buildSlice } from "shared/lib/store/buildSlice";
import { User, UserSchema } from "../types/userSchema";

const initialState: UserSchema = { _inited: false };

export const userSlice = buildSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      if (action.payload.feature) {
        console.log(action.payload.feature)
        setGetFeatureFlags(action.payload.feature);
      }
    },
    sayHi: (state) => {
      console.log(state.authData?.username, "Hi");
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USE_LOCALSTORAGE_KEY);
      if (user) {
        const json = JSON.parse(user) as User;
        state.authData = json;
        if (json.feature) {
          setGetFeatureFlags(json.feature);
        }
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USE_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
export const { useActions: userUseActions } = userSlice;
