import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const { data } = useSelector((state) => state.auth);

  if (!data || !data.role) {
    return <Navigate to="/editorLogin" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(data.role)) {
    return <Navigate to={`/${data.role}Home`}  />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
