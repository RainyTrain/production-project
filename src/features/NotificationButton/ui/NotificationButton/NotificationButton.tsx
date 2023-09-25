import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popups";
import Notification from "shared/assets/icons/Notification.svg";
import { memo } from "react";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      trigger={
        <Button theme={ThemButton.CLEAR}>
          <Icon Icon={Notification} inverted />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  )
);
