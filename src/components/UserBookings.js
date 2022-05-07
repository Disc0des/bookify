import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import UserNavbar from "./UserNavbar";
import "../styles/BookingForm.css";

function UserBookings() {
  const initialState = {
    fields: {
      firstName: "",
      surname: "",
      email: "",
      phoneNumber: "",
      date: "",
      services: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setfields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleUserBooking = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("", fields)
      .then(() => setAlert({ message: "Booking Confirmed", isSuccess: true }))
      .catch(() =>
        setAlert({
          message: "Server error, please try again later",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setfields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="bookingform">
      <Alert message={alert.message} success={alert.isSuccess} />
      <UserNavbar />
      <div className="container-image">
        <div className="form-container">
          <form
            action=""
            className="register-form"
            onSubmit={handleUserBooking}
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={fields.firstName}
              className="form-field"
              onChange={handleFieldChange}
            />
            {fields && !fields.firstName ? (
              <span>Must Enter First Name</span>
            ) : null}
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={fields.surname}
              className="form-field"
              onChange={handleFieldChange}
            />
            {fields && !fields.surname ? <span>Must Enter Surname</span> : null}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={fields.email}
              className="form-field"
              onChange={handleFieldChange}
            />
            {fields && !fields.email ? (
              <span>Must Enter A Valid Email</span>
            ) : null}
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={fields.phoneNumber}
              className="form-field"
              onChange={handleFieldChange}
            />
            {fields && !fields.phoneNumber ? (
              <span>Must Enter Valid Number</span>
            ) : null}
            <input
              type="datetime-local"
              id="DateTimeLocal"
              name="date"
              placeholder="date"
              value={fields.date}
              className="form-field"
              onChange={handleFieldChange}
            />
            {fields && !fields.date ? <span>Must Enter A Date</span> : null}
            <input
              name="services"
              placeholder="Services"
              value={fields.services}
              className="form-field"
              onChange={handleFieldChange}
            />
            {fields && !fields.time ? (
              <span>Must Enter A Service You Require</span>
            ) : null}
            <button className="form-field" type="submit">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserBookings;
