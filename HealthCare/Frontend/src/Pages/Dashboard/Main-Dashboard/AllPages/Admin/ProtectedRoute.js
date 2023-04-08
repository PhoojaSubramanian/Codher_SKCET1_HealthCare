import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Admin/context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/adddoctor" />;
  }
  return children;
};

export default ProtectedRoute;
