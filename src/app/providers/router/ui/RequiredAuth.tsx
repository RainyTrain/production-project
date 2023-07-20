import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";

interface RequiredAuthProps {
  children: JSX.Element;
}
export const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const isAuth = useSelector(getUserAuthData);

  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
