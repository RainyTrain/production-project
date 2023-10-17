import { StateSchema } from "app/providers/StoreProvider";
import { getUIScrollByPath, UIActions } from "features/UI";
import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch/UseAppDispatch";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "shared/types/forTest";
import cls from "./Page.module.scss";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname)
  );

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      UIActions.setScrollPosition({
        postion: event.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 1000);

  return (
    <div
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      // eslint-disable-next-line react/destructuring-assignment
      data-testid={props["data-testid"] ?? "Page"}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </div>
  );
};
