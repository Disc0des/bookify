import React from "react";
import PropTypes from "prop-types";
import "../styles/UserServicesCard.css";

function UserServicesCard({ title, description, duration, price }) {
  return (
    <div className="services-card-container">
      <ul className="services-list-items">
        <li className="service-card-title">{title}</li>
        <li>{description}</li>
        <li>{duration} minutes</li>
        <li>£ {price / 100}</li>
      </ul>
    </div>
  );
}

export default UserServicesCard;

UserServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
