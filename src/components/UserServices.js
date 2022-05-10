import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import UserServicesCard from "./UserServicesCard";
import "../styles/UserServices.css";

function UserServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/calendars/CALENDAR/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="user-services-page">
      <h2 className="company-title">MCR Codes Dog Grooming</h2>
      {error && (
        <Alert style={{ textAlign: "center" }} variant="danger">
          {error}
        </Alert>
      )}
      <div className="services-container">
        <div className="services-cards">
          {services.map((service) => {
            return <UserServicesCard key={service.id} {...service} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserServices;
