import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModule: FC<DynamicModuleProps> = (props) => {
  const { reducers, children, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name);
            dispatch({ type: `@REMOVE ${name} reducer` });
          }
        );
      }
    };
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
