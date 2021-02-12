import React from "react";
import { Route, Redirect } from "react-router-dom";

/** checks and returns the token in the localstorage */
const isAuthenticated = () => {
  const token = localStorage.getItem("jwtToken");

  return !!token;
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to={"/login"} />
    }
    {...rest}
  />
);

export default ProtectedRoute;
