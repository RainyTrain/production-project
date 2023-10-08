import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouterProps } from "shared/types/router";

import { PageLoader } from "widgets/PageLoader";
import { routeConfig } from "../config/RouteConfig";
import { RequiredAuth } from "./RequiredAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return (
      <Route
        path={route.path}
        key={route.path}
        element={
          route.authOnly ? (
            <RequiredAuth roles={route.roles}>{element}</RequiredAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
