import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserNavbar from "./UserNavbar";
// import AdminNavbar from "./AdminNavbar";
// import SuperUserNavbar from "./SuperUserNavbar";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Login from "./Login";
// import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UserServices from "./UserServices";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [userRole, setUserRole] = useState("");
  // setUserRole("user");
  // TODO: Pull "role" from the backend and save it as state, then pass this down to Dashboard as props
  return (
    <Router>
      <div className="navbar-container">
        <UserNavbar />
        {/* {userRole === "admin" && <AdminNavbar />}
        {userRole === "superuser" && <SuperUserNavbar />} */}
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/user-services" component={UserServices} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
