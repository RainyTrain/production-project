import { createContext, ReactNode, useMemo, useState } from "react";

export const ForceUpdateContext = createContext({
  value: true,
  forceUpdate: () => {},
});

export const ForceUpdateProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(true);

  const forceUpdate = () => {
    setValue((prev) => !prev);
    setTimeout(() => {
      setValue((prev) => !prev);
    }, 0);
  };

  const contextValue = useMemo(
    () => ({
      value,
      forceUpdate,
    }),
    [value]
  );

  if (!value) {
    return null;
  }

  return (
    <ForceUpdateContext.Provider value={contextValue}>
      {children}
    </ForceUpdateContext.Provider>
  );
};
