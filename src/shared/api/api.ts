import axios from "axios";
import { USE_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USE_LOCALSTORAGE_KEY) || "",
  },
});
