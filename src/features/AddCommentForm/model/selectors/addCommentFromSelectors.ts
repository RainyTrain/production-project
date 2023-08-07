import { StateSchema } from "app/providers/StoreProvider";

export const getAddCommentFormText = (state: StateSchema) =>
  state.addComment?.text;

export const getAddCommentFormError = (state: StateSchema) =>
  state.addComment?.error;
