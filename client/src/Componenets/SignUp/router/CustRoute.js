import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

//route for the customers
const CustRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user)

  if (token && user) {

    return <Route component={Component} {...rest} />
  }
  return <Redirect to="/" />
};

export default CustRoute