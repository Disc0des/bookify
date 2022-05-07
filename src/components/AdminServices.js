/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Alert } from "react-bootstrap";
import logo from "../bookify-logo.png";
import "../styles/Services.css";

const initialState = {
  service: {
    title: "",
    description: "",
    duration: 0,
    price: 0,
    calendar_id: 2,
  },
};

function AdminServices() {
  const [service, setService] = useState(initialState.service);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    console.log(service);
    setError("");
    setLoading(true);
    e.preventDefault();
    if (
      !service.title ||
      !service.description ||
      !service.duration ||
      !service.price
    ) {
      setError("Please fill in all the details");
    } else {
      axios
        .post("http://localhost:3000/api/services", service)
        .then(() => {
          setMessage("Service succesfully added!");
        })
        .catch((err) => {
          setError(err.detail);
        });

      setLoading(false);
    }
  }

  const handleFieldChange = (event) => {
    setService({ ...service, [event.target.name]: event.target.value });
  };

  return (
    <div className="services-container">
      <Card>
        <Card.Body style={{ height: "auto" }}>
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
          <Form onSubmit={handleSubmit}>
            <Form.Group id="title">
              <Form.Label style={{ marginBottom: "0px" }}>Title</Form.Label>
              <Form.Control
                id="title"
                name="title"
                type="text"
                value={service.title}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label style={{ marginBottom: "0px" }}>
                description
              </Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={service.description}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="duration">
              <Form.Label style={{ marginBottom: "0px" }}>
                Duration (mins)
              </Form.Label>
              <Form.Control
                type="number"
                step="1"
                name="duration"
                value={service.duration}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group id="price">
              <Form.Label style={{ marginBottom: "0px" }}>Price</Form.Label>
              <Form.Control
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="£"
                value={service.price}
                style={{ marginBottom: "1rem" }}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Add Service
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminServices;
