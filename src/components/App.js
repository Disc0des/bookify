/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

function App() {
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { userRole, setUserRole, isLoggedIn, setIsLoggedIn };
  // TODO: Pull "role" from the backend and save it as state, then pass this down to Dashboard as props
  return (
    <Router>
      <Context.Provider value={value}>
        {isLoggedIn === false && <Redirect to="/login" />}
        {isLoggedIn === true && <Redirect exact to="/" />}
        {userRole === "user" || (userRole === "customer" && <UserNavbar />)}
        {userRole === "admin" && <AdminNavbar />}
        {userRole === "superuser" && <SuperUserNavbar />}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user-services" component={UserServices} />
          <Route path="/make-booking" component={UserBookings} />
          <Route path="/update-details" component={UserUpdateDetails} />
          <Route path="/checkout" component={UserCheckout} />
          <Route path="/my-calender" component={AdminCalender} />
          <Route path="/contacts" component={AdminContacts} />
          <Route path="/update-services" component={AdminServices} />
          <Route path="/change-roles" component={SuperUserRoles} />
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
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
