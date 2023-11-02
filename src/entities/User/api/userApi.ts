import { rtlApi } from "shared/api/rtk";
import { JsonSettings } from "../model/types/jsonSettings";
import { User } from "../model/types/userSchema";

interface SetJsonSettingsArg {
  userId: string;
  jsonSettings: JsonSettings;
}

export const userApi = rtlApi.injectEndpoints({
  endpoints: (builder) => ({
    setJsonSettings: builder.mutation<User, SetJsonSettingsArg>({
      query: ({ jsonSettings, userId }) => ({
        method: "PATCH",
        url: `/users/${userId}`,
        body: { jsonSettings },
      }),
    }),
    getUserDataById: builder.query<User, string>({
      query: (userId) => ({
        method: "GET",
        url: `/users/${userId}`,
      }),
    }),
  }),
});

export const setJsonSettings = userApi.endpoints.setJsonSettings.initiate;
export const getUserDataById = userApi.endpoints.getUserDataById.initiate;
