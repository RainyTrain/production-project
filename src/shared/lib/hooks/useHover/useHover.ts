import { useCallback, useMemo, useState } from "react";

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
    console.log(isHover);
  }, [isHover]);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
    console.log(isHover);
  }, [isHover]);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave]
  );
};
