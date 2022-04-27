import React from "react";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";
import SuperUserNavbar from "./SuperUserNavbar";

function Dashboard(userRole) {
  return (
    <div className="navbar-container">
      {userRole === "user" && <UserNavbar />}
      {userRole === "admin" && <AdminNavbar />}
      {userRole === "superuser" && <SuperUserNavbar />}
    </div>
  );
}

export default Dashboard;
