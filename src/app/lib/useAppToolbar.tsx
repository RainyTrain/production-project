import { ReactElement } from "react";
import { AppRoutes } from "shared/const/router";
import { useRouteChange } from "shared/router/useRouteChange";
import { ScrollToolbar } from "widgets/ScrollToolbar";

export const useAppToolbar = () => {
  const appRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLES_DETAILS]: <ScrollToolbar />,
    [AppRoutes.PROFILE]: <ScrollToolbar />,
  };

  return toolbarByAppRoute[appRoute];
};
