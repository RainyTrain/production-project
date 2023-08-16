import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const getUISchema = (state: StateSchema) => state.ui.scroll;

export const getUIScrollByPath = createSelector(
  getUISchema,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
