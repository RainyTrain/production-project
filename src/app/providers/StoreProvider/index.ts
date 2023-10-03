import { createReduxStore } from "./config/store";

export type { StateSchema } from "./config/StateSchema";
export { StoreProvider } from "./ui/StoreProvider";
export { createReduxStore };
export type {
  ReduxStoreWithManager,
  ThunkExtraArgs,
  ThunkConfig,
} from "./config/StateSchema";
export type { AppDispatch } from "./config/store";
