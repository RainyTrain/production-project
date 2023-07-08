import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency/model/types/currency";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT USER DATA",
  INCORRECT_AGE = "INCORRECT AGE",
  INCORRECT_CITY = "INCORRECT CITY",
  SERVER_ERROR = "SERVER ERROR",
  NO_DATA = "NO DATA",
}

export interface Profile {
  first?: string;
  second?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}
