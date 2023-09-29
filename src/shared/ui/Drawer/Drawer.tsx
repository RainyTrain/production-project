import { memo, ReactNode, useCallback, useEffect } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import {
  AnimationProvider,
  useAnimationLibs,
} from "shared/lib/components/AnimationProvider";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import { useTheme } from "../ThemeProvider";
import cls from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } = props;

  const { Gesture, Spring } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const { closeHandler, isClosing, isMounted } = useModal({
    animationDelay: 0,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    // [cls.opened]: isOpen,
    // [cls.isClosing]: isClosing,
  };

  const { theme } = useTheme();

  const openDrawer = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  const closeDrawer = useCallback(() => {
    api.start({
      y: height,
      immediate: false,
      onResolve: closeHandler,
    });
  }, [api, closeHandler]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      offset: [, oy],
      cancel,
      canceled,
    }) => {
      if (oy < -70) {
        cancel();
      }

      if (last) {
        if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: oy, immediate: true });
      }
    },

    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? "block" : "none"));

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={closeDrawer} />
        <Spring.a.div
          className={cls.sheet}
          {...bind()}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});

export const Drawer = memo((props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
));
