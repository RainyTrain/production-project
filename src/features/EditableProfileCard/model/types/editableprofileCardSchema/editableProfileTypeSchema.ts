import { Profile } from "entities/Profile";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT USER DATA",
  INCORRECT_AGE = "INCORRECT AGE",
  INCORRECT_CITY = "INCORRECT CITY",
  SERVER_ERROR = "SERVER ERROR",
  NO_DATA = "NO DATA",
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}
