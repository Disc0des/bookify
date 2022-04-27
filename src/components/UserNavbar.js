import React from "react";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div className="navbar-container">
      logo
      <ul className="navbar-links">
        <li>
          <Link to="/user-services">Services</Link>
        </li>
        <li>
          <Link to="/make-booking">Bookings</Link>
        </li>
        <li>
          <Link to="/update-details">Update Details</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <button type="submit">Logout</button>
    </div>
  );
}
export default UserNavbar;
