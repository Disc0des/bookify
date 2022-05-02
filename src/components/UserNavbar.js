import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarLogo from "../bookify-navbar-logo.png";
import "../styles/Navbar.css";

function UserNavbar() {
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
      <ul className={active} style={{ paddingTop: "1rem" }}>
        <li className="navbar-link-items">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/user-services">Services</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/make-booking">Bookings</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/update-details">My Details</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/checkout">Checkout</NavLink>
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
export default UserNavbar;
