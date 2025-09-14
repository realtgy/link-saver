import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
const ProtectedRoute = () => {
  useAuth({
    onUnauth: "/login",
  });

  return <Outlet />;
};

export default ProtectedRoute;
