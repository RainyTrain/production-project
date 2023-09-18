import { getUserAuthData, getUserRoles } from "entities/User";
import { UserRole } from "entities/User/model/types/userSchema";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";

interface RequiredAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}
export const RequiredAuth = ({ children, roles }: RequiredAuthProps) => {
  const isAuth = useSelector(getUserAuthData);

  const userRoles = useSelector(getUserRoles);

  console.log('GET ROLES',userRoles)
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);

      return hasRole;
    });
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate
        to={RoutePath.forbidden_page}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
