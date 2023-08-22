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
import { AddCommentSchema } from "features/AddCommentForm";
import { LoginShema } from "features/AuthByUsername";
import { UISchema } from "features/UI";
import { ArticleDetailsPageSchema } from "pages/ArticlesDetailsPage";
import { ArticlePageSchema } from "pages/ArticlesPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  loginForm?: LoginShema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addComment?: AddCommentSchema;
  articlePage?: ArticlePageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountReducers: () => OptionalRecord<StateSchemaKey, boolean>;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
