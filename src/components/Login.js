/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import logo from "../bookify-logo.png";

const initialDetails = {
  username: "",
  password: "",
};
export default function Login() {
  const [details, setDetails] = useState(initialDetails);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setError("");
    setLoading("true");
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/authenticate", details)
      .then((res) => {
        setToken(res);
        console.log(token);
        <Redirect to="/" />;
      })
      .catch((err) => {
        setError(err.detail);
        console.log(error);
      });
    // TODO: Insert backend call
    setLoading(false);
  }

  const handleDetailChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <img src={logo} alt="bookify-logo" className="bookify-logo" />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={details.username}
                onChange={handleDetailChange}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={details.password}
                onChange={handleDetailChange}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
