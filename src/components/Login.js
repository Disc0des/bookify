/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Context from "../utils/Context";
import logo from "../bookify-logo.png";

export default function Login() {
  const { setUserId, setUserRole, setIsLoggedIn, details, setDetails } =
    useContext(Context);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [storedToken, setStoredToken] = useState(null);

  //* This calls the backend when the form is submitted to get a jwt
  function handleSubmit(e) {
    setError("");
    setLoading(true);
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/authenticate", details)
      .then((res) => {
        setStoredToken(res.data.token);
        setLoading(false);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setError("Username or Password is incorrect");
        setLoading(false);
      });
  }

  //* This refreshes the page and gets user role whenever a new token is received
  useEffect(() => {
    if (!storedToken) {
      return null;
    }
    const decodedToken = jwtDecode(storedToken);
    const { user_id, role_id } = decodedToken;
    setUserId(user_id);
    axios.get(`http://localhost:3000/api/roles/${role_id}`).then((res) => {
      setUserRole(res.data.role);
    });
    return null;
  }, [storedToken]);

  //* This updates the details state as its typed into the form
  const handleDetailChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
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
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Card.Body>
    </Card>
  );
}
