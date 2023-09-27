import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popups";
import Notification from "shared/assets/icons/Notification.svg";
import { memo, useCallback, useState } from "react";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { useDetectDevice } from "shared/lib/hooks/useDetectDevice/useDetectDevice";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => {
    const [open, setIsOpen] = useState(false);

    const { device } = useDetectDevice();

    const onOpenDrawer = useCallback(() => {
      setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false);
    }, []);

    const trigger = (
      <Button onClick={onOpenDrawer} theme={ThemButton.CLEAR}>
        <Icon Icon={Notification} inverted />
      </Button>
    );

    return (
      <div>
        {device === "PC" ? (
          <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        ) : (
          <>
            {trigger}
            <Drawer onClose={onCloseDrawer} isOpen={open}>
              <NotificationList />
            </Drawer>
          </>
        )}
      </div>
    );
  }
);
