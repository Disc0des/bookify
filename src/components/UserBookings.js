/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import { Form, Card, Button, Alert } from "react-bootstrap";
import logo from "../bookify-logo.png";
import "../styles/BookingForm.css";
import "react-datepicker/dist/react-datepicker.css";
import Context from "../utils/Context";

function UserBookings() {
  const { userId } = useContext(Context);
  const initialState = {
    bookings: {
      booking: "",
      user_id: userId,
      service_id: 1,
    },
  };

  const [bookings] = useState(initialState.bookings);
  const [selectedService, setSelecetedService] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // console.log(dateFormat(selectedDate, "isoDateTime"));
    axios
      .get("https://bookify-be.herokuapp.com/api/calendars/1/services")
      .then((res) => {
        setSelecetedService(res.data);
      })
      .catch((err) => {
        setError(err.detail);
      });
  }, [selectedDate]);

  function handleUserBooking(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    axios
      .post("https://bookify-be.herokuapp.com/stripe/create-checkout-session", {
        booking: dateFormat(selectedDate, "isoDateTime"),
        user_id: bookings.user_id,
        service_id: bookings.service_id,
      })
      .then((res) => {
        window.open(res.data.url);
        setMessage("Service successfully added!");
      })
      .catch((err) => {
        setError(err.detail);
      });

    setLoading(false);
  }

  return (
    <div className="bookingform">
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
          <Form.Label style={{ marginBottom: "5px" }}>
            Select Service
          </Form.Label>
          <Form onSubmit={handleUserBooking}>
            <Form.Select>
              {selectedService.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </Form.Select>
            <Form.Label style={{ marginBottom: "5px" }}>
              Select Date & Time
            </Form.Label>
            <DatePicker
              showTimeSelect={selectedDate}
              selected={selectedDate}
              onChange={(selectedDate) => setSelectedDate(selectedDate)}
              minDate={new Date()}
              scrollableYearDropdown
              value={selectedDate}
              dateFormat="yyyy-MM-dd HH:mm:ss"
              timeIntervals={60}
              withPortal
            />
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Make Booking
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserBookings;
