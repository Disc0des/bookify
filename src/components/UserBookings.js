/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Form, Card, Button } from "react-bootstrap";
import logo from "../bookify-logo.png";
import "../styles/BookingForm.css";
import "react-datepicker/dist/react-datepicker.css";
import Context from "../utils/Context";

function UserBookings() {
  const { userId } = useContext(Context);
  const initialState = {
    bookings: {
      booking: "",
      service: "",
      user_id: { userId },
      service_id: 5,
    },
  };

  const [bookings] = useState(initialState.bookings);
  const [selectedService, setSelecetedService] = useState([]);
  const [setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/calendars/CALENDAR/services")
      .then((res) => {
        setSelecetedService(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  function handleUserBooking(e) {
    setError("");
    setLoading(true);
    e.preventDefault();
    if (!bookings.booking || !bookings.service) {
      setError("Please fill in all the details");
    } else {
      axios
        .post("http://localhost:3000/stripe/create-checkout-session", bookings)
        .then(() => {
          setMessage("Service succesfully added!");
        })
        .catch((err) => {
          setError(err.detail);
        });

      setLoading(false);
    }
  }

  // const handleFieldChange = (event) => {
  //   setBookings({ ...bookings, [event.target.title]: event.target.value });
  // };

  const openingTimes = (time) => {
    return time.getHours() > 8 && time.getHours() < 18;
  };

  return (
    <div className="bookingform">
      <Card>
        <Card.Body style={{ height: "auto" }}>
          <img src={logo} alt="bookify-logo" className="bookify-logo" />
          <h2 className="bookingformtitle"> Make A Booking</h2>
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
              // type="text"
              showTimeSelect={selectedDate}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              scrollableYearDropdown
              // placeholderText="Date"
              value={selectedDate}
              dateFormat="yyyy, MM, dd h:mm aa"
              timeIntervals={60}
              timeClassName={openingTimes}
              // excludeTimes={openingTimes}
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
