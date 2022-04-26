/* eslint-disable react/prop-types */
import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
