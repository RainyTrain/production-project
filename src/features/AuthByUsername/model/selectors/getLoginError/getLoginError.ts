import { createSelector } from "@reduxjs/toolkit";
import { LoginShema } from "../../types/loginShema";
import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginError = createSelector(
  getLoginState,
  (login: LoginShema) => login?.error
);
