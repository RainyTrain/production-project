import { classNames } from "shared/lib/classNames/classNames";
import { Card as CardDeprecated, CardTheme } from "shared/ui/Deprecated/Card";
import { Text as TextDeprecated } from "shared/ui/Deprecated/Text";
import { ToggleFeatures } from "shared/features";
import { Card } from "shared/ui/Redesigned/Card";
import { Text } from "shared/ui/Redesigned/Text";
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
    <ToggleFeatures
      feature="isAppReDesigned"
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <TextDeprecated title={item.title} text={item.description} />
        </CardDeprecated>
      }
      on={
        <Card
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <Text title={item.title} text={item.description} />
        </Card>
      }
    />
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
