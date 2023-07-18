import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared";
import { AppRouterProps } from "shared/config/RouteConfig/RouteConfig";
import { PageLoader } from "widgets/PageLoader/PageLoader";
import { RequiredAuth } from "./RequiredAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );
    return (
      <Route
        path={route.path}
        key={route.path}
        element={
          route.authOnly ? <RequiredAuth>{element}</RequiredAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
