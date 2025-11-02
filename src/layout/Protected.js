import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const { data } = useSelector((state) => state.auth);

  // No user? redirect to login
  if (!data || !data.role) {
    return <Navigate to="/editorLogin" replace />;
  }

  // Role not allowed? redirect to their home
  if (allowedRoles && !allowedRoles.includes(data.role)) {
    return <Navigate to={`/${data.role}Home`} replace />;
  }

  // User is allowed
  return <Outlet />;
};

export default ProtectedRoute;
