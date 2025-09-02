import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/model/auth";

export function ProtectedRoute() {
  const { token,loading } = useAuth();

  if(loading){
    return <div>Carregando...</div>
  }
  
  if (!token)  {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
