import React, { useContext } from "react";
import Context from "../utils/Context";
import dogGrooming from "../dog-grooming copy.png";
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
          </li>
          <li className="dashboard-link-item">
            <h3>What&apos;s New</h3>
            <img
              src={dogGrooming}
              alt="dog-grooming"
              className="dog-groom-image"
            />
            <div className="dashboard-textbox">
              <p>MCR Codes Dog Grooming</p>
              <p>
                We offer a wide range of services to help your pooch feel
                pampered, book now to get 20% off your first visit
              </p>
            </div>
          </li>
          <li className="dashboard-link-item">
            <h3>Your Rewards</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
