import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import navbarLogo from "../bookify-navbar-logo.png";
import Context from "../utils/Context";
import "../styles/SuperUserNavbar.css";

function SuperUserNavbar() {
  const { setIsLoggedIn } = useContext(Context);
  const [active, setActive] = useState("navbar-links");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  //* this function pops the side bar in
  const navToggle = () => {
    if (active === "navbar-links") {
      setActive("Snavbar-links Snavbar-active");
    } else {
      setActive("Snavbar-links");
    }
    if (toggleIcon === "nav-toggler") {
      setToggleIcon("Snav-toggler Stoggle");
    } else {
      setToggleIcon("Snav-toggler");
    }
  };

  const handleOnClick = () => {
    setIsLoggedIn(false);
    window.location = "/login";
  };

  return (
    <div className="Snavbar-container">
      <img src={navbarLogo} alt="navbar-logo" className="Snavbar-logo" />
      <ul className={active}>
        <li className="Snavbar-link-items">
          <NavLink to="/user-services">Services</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <NavLink to="/make-booking">Bookings</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <NavLink to="/update-details">My Details</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <NavLink to="/my-calender">My Calender</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <NavLink to="/update-services">Update Services</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
        <li className="Snavbar-link-items">
          <button
            type="submit"
            className="Slogout-button"
            onClick={handleOnClick}
          >
            Logout
          </button>
        </li>
      </ul>
      <button onClick={navToggle} type="button" className={toggleIcon}>
        <div className="Sline1" />
        <div className="Sline2" />
        <div className="Sline3" />
      </button>
    </div>
  );
}
export default SuperUserNavbar;
