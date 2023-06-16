import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginShema;
}
