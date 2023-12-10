import { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { AppRouteByPath, AppRoutes } from "shared/const/router";

export const useRouteChange = () => {
  const location = useLocation();

  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPath).every(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
        return false;
      }
      return true;
    });
  }, [location.pathname]);

  return appRoute;
};
