/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Context from "../utils/Context";

//* Navbar Imports
import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";
import SuperUserNavbar from "./SuperUserNavbar";

//* Entry Pages Imports
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

import Dashboard from "./Dashboard";
import SuperUserRoles from "./SuperUserRoles";

//* User Pages Imports
import UserServices from "./UserServices";
import UserBookings from "./UserBookings";
import UserUpdateDetails from "./UserUpdateDetails";
import UserCheckout from "./UserCheckout";

//* Admin Page Imports
import AdminCalender from "./AdminCalender";
import AdminContacts from "./AdminContacts";
import AdminServices from "./AdminServices";
import AdminAddCalender from "./AdminAddCalender";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  const initialDetails = {
    username: "",
    password: "",
  };
  const [details, setDetails] = useState(initialDetails);
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const value = {
    userRole,
    setUserRole,
    isLoggedIn,
    setIsLoggedIn,
    details,
    setDetails,
    setUserId,
    userId,
  };
  // TODO: test different user roles to make sure correct navbar loads
  return (
    <Router>
      <Context.Provider value={value}>
        {isLoggedIn === false && <Redirect to="/login" />}
        {isLoggedIn === true && <Redirect exact to="/" />}
        {userRole === "customer" && <UserNavbar />}
        {userRole === "company" && <AdminNavbar />}
        {userRole === "superuser" && <SuperUserNavbar />}
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/user-services" component={UserServices} />
          <PrivateRoute path="/make-booking" component={UserBookings} />
          <PrivateRoute path="/update-details" component={UserUpdateDetails} />
          <PrivateRoute path="/checkout" component={UserCheckout} />
          <PrivateRoute path="/my-calender" component={AdminCalender} />
          <PrivateRoute path="/contacts" component={AdminContacts} />
          <PrivateRoute path="/change-roles" component={SuperUserRoles} />
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <PrivateRoute path="/update-services" component={AdminServices} />
              <PrivateRoute
                path="/update-calender"
                component={AdminAddCalender}
              />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Container>
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
