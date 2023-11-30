import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Deprecated/Skeleton";
import { Vstack } from "shared/ui/Redesigned/Stack";
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
      {notifcations?.map((notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </Vstack>
  );
};
