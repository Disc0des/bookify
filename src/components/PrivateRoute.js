/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../utils/Context";

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useContext(Context);
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
