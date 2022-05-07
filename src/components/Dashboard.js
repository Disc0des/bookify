import React, { useContext } from "react";
import Context from "../utils/Context";
import dogGrooming from "../dog-grooming copy.png";
import dogSpa from "../dog-spa.png";
import "../styles/Dashboard.css";

function Dashboard() {
  const { details } = useContext(Context);
  return (
    <div className="dashboard-container">
      <div className="dashboard-page1">
        <div className="dashboard-welcome">
          <h2>Welcome, {details.username}!</h2>
        </div>
        <ul className="dashboard-links">
          <li className="dashboard-link-item">
            <h3>This week</h3>
            <p style={{ fontWeight: "600", marginTop: "1rem" }}>
              Your next appointment is:
            </p>
            <div
              className="appointment-container"
              style={{ margin: "0 0 1rem 0" }}
            >
              Next Appointment
            </div>
            <p style={{ fontWeight: "600", marginTop: "1rem" }}>
              Also this week:
            </p>
            <div
              className="appointment-container"
              style={{ margin: "0 0 1rem 0" }}
            >
              This Week
            </div>
            <div
              className="appointment-container"
              style={{ margin: "0 0 1rem 0" }}
            >
              This Week
            </div>
            <div
              className="appointment-container"
              style={{ margin: "0 0 1rem 0" }}
            >
              This Week
            </div>
          </li>
          <li className="dashboard-link-item">
            <h3>What&apos;s New</h3>
            <img
              src={dogGrooming}
              alt="dog-grooming"
              className="dog-groom-image"
            />
            <div className="dashboard-textbox">
              <p style={{ fontWeight: "600" }}>MCR Codes Dog Grooming</p>
              <p style={{ fontWeight: "300" }}>
                We offer a wide range of services to help your pooch feel
                pampered, book now to get 20% off your first visit
              </p>
            </div>
          </li>
          <li className="dashboard-link-item">
            <h3>Your Rewards</h3>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "600",
                margin: "1rem 0 0 0",
              }}
            >
              50% off your first doggy spa day at MCR Codes Dog Grooming **
            </p>
            <img src={dogSpa} alt="dog-spa" className="dog-spa-image" />
            <p>** Use code &ldquo;calander&ldquo; at the checkout</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
