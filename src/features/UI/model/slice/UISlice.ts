import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UISchema } from "../types/UISchema";

const initialState: UISchema = {
  scroll: {},
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; postion: number }>
    ) => {
      state.scroll[action.payload.path] = action.payload.postion;
    },
  },
});

export const { actions: UIActions } = uiSlice;
export const { reducer: UIReducer } = uiSlice;
