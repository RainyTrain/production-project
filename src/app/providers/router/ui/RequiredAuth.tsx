import { getUserAuthData, getUserRoles, UserRole } from "entities/User";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getMainPage, getMForbiddenPage } from "shared/const/router";

interface RequiredAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequiredAuth = ({ children, roles }: RequiredAuthProps) => {
  const isAuth = useSelector(getUserAuthData);
  console.log(isAuth, "auth");

  const userRoles = useSelector(getUserRoles);

  console.log("GET ROLES", userRoles);
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

  console.log("hasRequiredRoles", hasRequiredRoles);

  if (!isAuth) {
    return <Navigate to={getMainPage()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getMForbiddenPage()} state={{ from: location }} replace />
    );
  }

  return children;
};
