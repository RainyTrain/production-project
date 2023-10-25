import { StateSchema } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";

type SelectorType<T, Args extends any[]> = (
  state: StateSchema,
  ...args: Args
) => T;

type Hook<T, Args extends any[]> = (...args: Args) => T;

type buildSelectorInterface<T, Args extends any[]> = [
  Hook<T, Args>,
  SelectorType<T, Args>
];

export const buildSelector = <T, Args extends any[]>(
  selector: SelectorType<T, Args>
): buildSelectorInterface<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
};
