import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {
  const user = localStorage.getItem('user')
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};