import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article";
import { addCommentReducer } from "features/AddCommentForm";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModule";

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addComment: addCommentReducer,
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
