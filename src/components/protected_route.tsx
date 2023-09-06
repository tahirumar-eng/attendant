import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../features/signin/authSlice";

const ProtectedRoute = () => {
  const location = useLocation();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // returns child route elements
  return isAuthenticated && <Outlet />;
};
export default ProtectedRoute;
