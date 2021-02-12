import React from "react";
import { Route, Redirect } from "react-router-dom";

/** checks and returns the token in the localstorage */
const isAuthenticated = () => {
  const token = localStorage.getItem("jwtToken");

  return !!token;
};

// if logged in where to redirect the user.
const redirectTo = "/home";

const LoginRoute = ({ component: Component, ...rest }) =>
  isAuthenticated() ? (
    <Redirect to={{ pathname: redirectTo }} />
  ) : (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );

export default LoginRoute;
