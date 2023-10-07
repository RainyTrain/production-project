import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice/articleDetailsSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "features/EditableProfileCard/model/slice/profileSlice";
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage/model/slice";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModule";

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
  (Story: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
