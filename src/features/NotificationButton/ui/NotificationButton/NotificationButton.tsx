import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import {
  Button as ButtonDeprecated,
  ThemButton,
} from "shared/ui/Deprecated/Button";
import { Icon as IconDeprecated } from "shared/ui/Deprecated/Icon";
import { Popover as PopoverDeprecated } from "shared/ui/Deprecated/Popups";
import NotificationDeprecated from "shared/assets/icons/Notification.svg";
import Notification from "shared/assets/icons/notificationNew.svg";
import { memo, useCallback, useState } from "react";
import { Drawer } from "shared/ui/Redesigned/Drawer";
import { useDetectDevice } from "shared/lib/hooks/useDetectDevice/useDetectDevice";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";
import { ToggleFeatures } from "shared/features";
import { Icon } from "shared/ui/Redesigned/Icon";
import { Popover } from "shared/ui/Redesigned/Popups";
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
      <ToggleFeatures
        feature="isAppReDesigned"
        off={
          <ButtonDeprecated onClick={onOpenDrawer} theme={ThemButton.CLEAR}>
            <IconDeprecated Icon={NotificationDeprecated} inverted />
          </ButtonDeprecated>
        }
        on={<Icon Icon={Notification} clickable onClick={onOpenDrawer} />}
      />
    );

    return (
      <div>
        {device === "PC" ? (
          <ToggleFeatures
            feature="isAppReDesigned"
            off={
              <PopoverDeprecated
                className={classNames(cls.NotificationButton, {}, [className])}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </PopoverDeprecated>
            }
            on={
              <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </Popover>
            }
          />
        ) : (
          <>
            {trigger}
            {open && (
              <AnimationProvider>
                <Drawer onClose={onCloseDrawer} isOpen={open}>
                  <NotificationList />
                </Drawer>
              </AnimationProvider>
            )}
          </>
        )}
      </div>
    );
  }
);
