import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USE_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const rtlApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USE_LOCALSTORAGE_KEY) || "";
      if (token) {
        headers.set("Authorization", token);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
