/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react";
import axios from "axios";
import { Form, Button, Card, Alert } from "react-bootstrap";
import logo from "../bookify-logo.png";

const initialState = {
  delivery: {
    house_number: "",
    street_name: "",
    town: "",
    city: "",
    postcode: "",
  },
  newPassword: {
    old_password: "",
    new_password: "",
    new_password_confirm: "",
  },
};

function UserUpdateDetails() {
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [fields, setFields] = useState(initialState.delivery);
  const [updatePassword, setUpdatePassword] = useState(
    initialState.newPassword
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function messageTimeout() {
    setMessage("");
  }

  function handleSubmitDelivery(e) {
    setError("");
    setLoading(true);
    e.preventDefault();
    if (
      !fields.house_number ||
      !fields.street_name ||
      !fields.town ||
      !fields.city ||
      !fields.postcode
    ) {
      setError("Please fill in all the details");
    } else {
      axios
        .post("https://bookify-be.herokuapp.com/api/users", fields)
        .then(() => {
          setMessage("Your delivery details have been updted");
          setTimeout(messageTimeout, 2000);
        })
        .catch((err) => {
          setError(err.detail);
        });
    }
    setLoading(false);
  }

  function handleSubmitPassword(e) {
    setError("");
    setLoading(true);
    e.preventDefault();
    if (updatePassword.old_password !== updatePassword.new_password) {
      setError("Your passwords do not match");
    } else if (fields.password.length < 8) {
      setError("Your password must be at least 8 characters");
    } else {
      axios
        .post("http://localhost:3000/api/users", fields)
        .then(() => {
          setMessage("Your password has been updated");
          setTimeout(messageTimeout, 2000);
        })
        .catch((err) => {
          setError(err.detail);
        });
    }
    setLoading(false);
  }

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    setUpdatePassword({
      ...setUpdatePassword,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="services-container">
      <Card>
        <Card.Body>
          <img src={logo} alt="bookify-logo" className="bookify-logo" />
          {error && (
            <Alert variant="danger" style={{ textAlign: "center" }}>
              {error}
            </Alert>
          )}
          {message && (
            <Alert variant="success" style={{ textAlign: "center " }}>
              {message}
            </Alert>
          )}
          <Form onSubmit={handleSubmitPassword}>
            <Form.Group id="oldPassword">
              <Form.Label style={{ marginBottom: "0px" }}>
                Old Password
              </Form.Label>
              <Form.Control
                id="oldPassword"
                name="old_password"
                type="text"
                value={updatePassword.old_password}
                ref={oldPasswordRef}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="newPassword">
              <Form.Label style={{ marginBottom: "0px" }}>
                New Password
              </Form.Label>
              <Form.Control
                type="text"
                name="newPassword"
                value={updatePassword.new_password}
                ref={passwordRef}
                style={{ marginBottom: "1rem" }}
                placeholder="Must be at least 8 characters"
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="newPasswordConfirm">
              <Form.Label style={{ marginBottom: "0px" }}>
                Confirm New Password
              </Form.Label>
              <Form.Control
                type="text"
                name="newPasswordConfirm"
                value={updatePassword.new_password_confirm}
                style={{ marginBottom: "1rem" }}
                ref={passwordConfirmRef}
                placeholder="Must be at least 8 characters"
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{ marginBottom: "30px" }}
            >
              Update Password
            </Button>
          </Form>
          <Form onSubmit={handleSubmitDelivery}>
            <Form.Group id="houseNumber">
              <Form.Label style={{ marginBottom: "0px" }}>
                House Number
              </Form.Label>
              <Form.Control
                id="houseNumber"
                name="house_number"
                type="text"
                value={fields.house_number}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="streetName">
              <Form.Label style={{ marginBottom: "0px" }}>
                Street Name
              </Form.Label>
              <Form.Control
                id="streetName"
                name="street_name"
                type="text"
                value={fields.street_name}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="town">
              <Form.Label style={{ marginBottom: "0px" }}>Town</Form.Label>
              <Form.Control
                id="town"
                name="town"
                type="text"
                value={fields.town}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="city">
              <Form.Label style={{ marginBottom: "0px" }}>City</Form.Label>
              <Form.Control
                id="city"
                name="city"
                type="text"
                value={fields.city}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="postcode">
              <Form.Label style={{ marginBottom: "0px" }}>Town</Form.Label>
              <Form.Control
                id="postcode"
                name="postcode"
                type="text"
                value={fields.postcode}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Update Details
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserUpdateDetails;
