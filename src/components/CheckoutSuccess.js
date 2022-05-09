import React from "react";
import { Link } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";
import logo from "../bookify-logo.png";

export default function CheckoutSuccess() {
  return (
    <div>
      <Card>
        <Card.Body style={{ textAlign: "center" }}>
          <img src={logo} alt="bookify-logo" className="bookify-logo" />
          <Alert
            variant="success"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            Your payment was succesful! Thankyou for booking with MCR Codes Dog
            Grooming.
          </Alert>
          <Link exact to="/">
            Return to Dashboard
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
