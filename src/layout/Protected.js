import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  
  const user = JSON.parse(localStorage.getItem("user")); 
  console.log('user', user)
  if (!user) {
    return <Navigate to="/editorLogin" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; 
};

export default ProtectedRoute;
