import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginShema } from "../types/loginShema";

const initialState: LoginShema = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
