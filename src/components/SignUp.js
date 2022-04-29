/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import logo from "../bookify-logo.png";

const initialState = {
  fields: {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  },
};

function SignUp() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: insert backend calls
    // TODO: assert that all fields have been completed
    // TODO: passwords over 8 char and placeholders
    setError("");
    setLoading(false);
  }

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <img src={logo} alt="bookify-logo" className="bookify-logo" />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="username">
              <Form.Label style={{ marginBottom: "0px" }}>Username</Form.Label>
              <Form.Control
                id="username"
                name="username"
                type="text"
                value={fields.username}
                ref={usernameRef}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="first-name">
              <Form.Label style={{ marginBottom: "0px" }}>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={fields.firstName}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="lastName">
              <Form.Label style={{ marginBottom: "0px" }}>Surname</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={fields.lastName}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label style={{ marginBottom: "0px" }}>Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={fields.email}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label style={{ marginBottom: "0px" }}>
                Choose a Password
              </Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                value={fields.password}
                style={{ marginBottom: "1rem" }}
                placeholder="Must be at least 8 characters"
                ref={passwordRef}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="passwordConfirm">
              <Form.Label style={{ marginBottom: "0px" }}>
                Confirm your Password
              </Form.Label>
              <Form.Control
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={fields.passwordConfirm}
                placeholder="Must be at least 8 characters"
                ref={passwordConfirmRef}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
