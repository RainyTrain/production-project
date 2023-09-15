import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency/model/types/currency";

export interface Profile {
  id?: string;
  first?: string;
  second?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
