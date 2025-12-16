import { useContext, type ReactNode } from "react";
import { AuthContext } from "../contexts/Authcontexts";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps): any {
  const { signed, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return <h1>Carregando...</h1>;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}
