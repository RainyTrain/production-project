import { rtlApi } from "shared/api/rtk";
import { Notification } from "../model/types/notification";

const notificationApi = rtlApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: "/notifications",
      }),
    }),
  }),
  overrideExisting: false,
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
