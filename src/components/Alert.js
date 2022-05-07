import React from "react";
// import "../styles/Alert.css";
import PropTypes from "prop-types";

function Alert({ message, success }) {
  if (!message) return null;
  return (
    <div className={`alert-${success ? "success" : "error"}`}>{message}</div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
