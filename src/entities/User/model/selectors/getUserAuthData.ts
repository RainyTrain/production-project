import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthData = (State: StateSchema) => State.user.authData;
