import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import UserServicesCard from "./UserServicesCard";

function UserServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/calendars/2/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  return (
    <div>
      <div className="company-title">MCR Codes Dog Grooming</div>
      {error && (
        <Alert style={{ textAlign: "center" }} variant="danger">
          {error}
        </Alert>
      )}
      <div className="services-container">
        {services.map((service) => {
          return <UserServicesCard key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
}

export default UserServices;
