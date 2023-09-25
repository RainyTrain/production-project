import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Vstack } from "shared/ui/Stack/Vstack/Vstack";
import { useNotifications } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import cls from "./NotificationList.module.scss";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = ({ className }: NotificationListProps) => {
  const {
    data: notifcations,
    isLoading,
    isError,
  } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <Vstack
        gap="16"
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </Vstack>
    );
  }

  return (
    <Vstack
      gap="16"
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {notifcations?.map((notification: any) => (
        <NotificationItem item={notification} />
      ))}
    </Vstack>
  );
};
