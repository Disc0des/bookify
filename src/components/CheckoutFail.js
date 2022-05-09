import React from "react";
import { Link } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";
import logo from "../bookify-logo.png";

export default function CheckoutFail() {
  return (
    <div>
      <Card>
        <Card.Body style={{ textAlign: "center" }}>
          <img src={logo} alt="bookify-logo" className="bookify-logo" />
          <Alert
            variant="danger"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            Your payment was unsuccesful! Please check your details and try
            again.
          </Alert>
          <Link exact to="/">
            Return to Dashboard
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
