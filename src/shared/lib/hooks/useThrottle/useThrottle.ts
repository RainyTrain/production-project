import { useCallback, useEffect, useRef } from "react";

export const useThrottle = (
  callback: (...args: any) => void,

  timeOut: number
) => {
  const throttleRef = useRef(false);

  const timerRef = useRef<any>(null);

  const throttledCallback = useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timerRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, timeOut);
      }
    },
    [callback, timeOut]
  );

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  return throttledCallback;
};
