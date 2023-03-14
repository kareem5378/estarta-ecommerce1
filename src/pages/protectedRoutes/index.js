import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoutes({ component }) {
  const { isAuth } = useSelector((state) => state.Auth);

  return isAuth ? component : <Navigate to={"/loginpage"} />;
}
