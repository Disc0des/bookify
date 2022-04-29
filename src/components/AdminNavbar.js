import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarLogo from "../bookify-navbar-logo.png";
import "../styles/Navbar.css";

function AdminNavbar() {
  const [active, setActive] = useState("navbar-links");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const navToggle = () => {
    if (active === "navbar-links") {
      setActive("navbar-links navbar-active");
    } else {
      setActive("navbar-links");
    }
    if (toggleIcon === "nav-toggler") {
      setToggleIcon("nav-toggler toggle");
    } else {
      setToggleIcon("nav-toggler");
    }
  };

  return (
    <div className="navbar-container">
      <img src={navbarLogo} alt="navbar-logo" className="navbar-logo" />
      <ul className={active}>
        <li className="navbar-link-items">
          <NavLink exact to="/">
            Dashboard
          </NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/my-calender">My Calender</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/update-services">Update Services</NavLink>
        </li>
        <li className="navbar-link-items">
          <button type="submit" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
      <button onClick={navToggle} type="button" className={toggleIcon}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </button>
    </div>
  );
}
export default AdminNavbar;
