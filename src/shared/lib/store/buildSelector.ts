import { StateSchema } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";

type SelectorType<T> = (state: StateSchema) => T;

type buildSelectorInterface<T> = [() => T, SelectorType<T>];

export const buildSelector = <T>(
  selector: SelectorType<T>
): buildSelectorInterface<T> => {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
};
