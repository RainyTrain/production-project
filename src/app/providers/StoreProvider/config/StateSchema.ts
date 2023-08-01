import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";
import { ArticleDetailsCommentSchema } from "pages/ArticlesDetailsPage";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginShema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  ArticleDetailsComments?: ArticleDetailsCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
