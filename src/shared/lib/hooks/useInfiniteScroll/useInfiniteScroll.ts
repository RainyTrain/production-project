import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const ref = triggerRef.current;

    if (callback && wrapperRef) {
      const options = {
        root: null,
        rootMargin: "1px",
        threshold: 0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
      observer.observe(ref);
    }

    return () => {
      if (observer) {
        observer.unobserve(ref);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
