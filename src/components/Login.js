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

const initialDetails = {
  username: "",
  password: "",
};
export default function Login() {
  const { setUserRole, setIsLoggedIn } = useContext(Context);
  const [details, setDetails] = useState(initialDetails);
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
      })

      .catch((err) => {
        setError(err.detail);
        setLoading(false);
      });
  }
  //* This refreshes the page and gets user role whenever a new token is received
  useEffect(() => {
    if (!storedToken) {
      return null;
    }
    const decodedToken = jwtDecode(storedToken);
    const { role_id } = decodedToken;
    axios.get(`http://localhost:3000/api/roles/${role_id}`).then((res) => {
      setUserRole(res.data.role);
      setIsLoggedIn(true);
    });
    return null;
  }, [storedToken]);

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
