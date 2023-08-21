import { MutableRefObject, useCallback, useEffect, useRef } from "react";

interface UseDebounce {
  callback: (...args: any[]) => void;
  delay: number;
}

export const useDebounce = ({ callback, delay }: UseDebounce) => {
  const timerRef = useRef() as MutableRefObject<any>;

  const callbackFunction = useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  return callbackFunction;
};
