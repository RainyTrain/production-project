import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardTheme } from "shared/ui/Deprecated/Card";
import { Text } from "shared/ui/Deprecated/Text";
import cls from "./NotificationItem.module.scss";
import { Notification } from "../../model/types/notification";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = ({
  className,
  item,
}: NotificationItemProps) => {
  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
};
