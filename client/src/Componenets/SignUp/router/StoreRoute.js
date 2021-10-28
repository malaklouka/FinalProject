import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

//route for the storekeeper
const StoreRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user)

  if (token && user && user.role === "storekeeper") {

    return <Route component={Component} {...rest} />
  }
  return <Redirect to="/home" />
};

export default StoreRoute