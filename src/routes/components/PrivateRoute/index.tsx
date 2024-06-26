import { routes } from "@/constants/routes";
import { AuthState } from "@/interfaces";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: ReactNode;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const auth: AuthState = useSelector((state: any) => state.auth);

  if (!(auth.isLogged && auth.token)) {
    return <Navigate to={routes.LOGIN} replace />;
  }
  return children;
};

export default PrivateRoute;
