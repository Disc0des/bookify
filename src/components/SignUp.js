/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";

const initialState = {
  fields: {
    email: "",
    firstName: "",
    surname: "",
    firstLine: "",
    postcode: "",
    password: "",
    passwordConfirm: "",
  },
};

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [fields, setFields] = useState(initialState.fields);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // insert funcionality here
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
          <h2 className="text-center mb-4">bookify - Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="first-name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                value={fields.surname}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="first-line">
              <Form.Label>First Line of Address</Form.Label>
              <Form.Control
                id="firstLine"
                name="firstLine"
                type="text"
                value={fields.firstLine}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="postcode">
              <Form.Label>Postcode</Form.Label>
              <Form.Control
                id="postcode"
                name="postcode"
                type="text"
                value={fields.postcode}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={fields.email}
                ref={emailRef}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Choose a Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                value={fields.password}
                ref={passwordRef}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="passwordConfirm">
              <Form.Label>Confirm your Password</Form.Label>
              <Form.Control
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={fields.passwordConfirm}
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
