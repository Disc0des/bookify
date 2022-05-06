/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Context from "../utils/Context";
import logo from "../bookify-logo.png";

function AdminAddCalender() {
  const { userId } = useContext(Context);
  const initialState = {
    calender: {
      title: "",
      user_id: { userId },
    },
  };
  const [calender, setcalender] = useState(initialState.calender);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    setError("");
    setLoading(true);
    e.preventDefault();
    if (!calender.title) {
      setError("Please fill in all the details");
    } else {
      axios
        .post("http://localhost:3000/api/calendars", calender)
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
    setcalender({ ...calender, [event.target.name]: event.target.value });
  };

  return (
    <div>
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
          <Form onSubmit={handleSubmit}>
            <Form.Group id="title">
              <Form.Label style={{ marginBottom: "0px" }}>Title</Form.Label>
              <Form.Control
                id="title"
                name="title"
                type="text"
                value={calender.title}
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
              Add Calender
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminAddCalender;
