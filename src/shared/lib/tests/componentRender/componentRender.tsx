import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { ThemeProvider } from "shared/ui/ThemeProvider";
import "app/styles/index.scss";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export const TestProvider = ({ children, options = {} }: TestProviderProps) => {
  const { route = "/", initialState, asyncReducers } = options;
  return (
    <MemoryRouter initialEntries={[route!]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider>
            <div className="app">{children}</div>
          </ThemeProvider>
        </I18nextProvider>
        )
      </StoreProvider>
    </MemoryRouter>
  );
};

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
) => {
  render(<TestProvider options={options}>{component}</TestProvider>);
};
