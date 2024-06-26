import { routes } from "@/constants/routes";
import { AuthState } from "@/interfaces";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface IPublicRoute {
  children: ReactNode;
}

const PublicRoute: FC<IPublicRoute> = ({ children }) => {
  const auth: AuthState = useSelector((state: any) => state.auth);
  const location = useLocation();

  if (auth.isLogged && auth.token && location.pathname.includes("auth")) {
    return <Navigate to={routes.HOME} replace />;
  }

  return children;
};

export default PublicRoute;
