import React, { useEffect, useState } from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  DateNavigator,
  TodayButton,
  WeekView,
  Toolbar,
  Appointments,
  Scheduler,
} from "@devexpress/dx-react-scheduler-material-ui";
import "../styles/AdminCalendar.css";
import axios from "axios";

function AdminCalender() {
  const [bookingsMap, setBookingsMap] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/calendars/5/bookings")
      .then((res) => {
        const bookings = res.data;
        return bookings;
      })
      .then((res) => {
        const newArray = res.map((bookings) => {
          const book = {
            id: bookings.id,
            title: bookings.title,
            startDate: bookings.startDate,
            endDate: bookings.endDate,
            user_id: bookings.user_id,
            service_id: bookings.service_id,
          };
          return book;
        });
        setBookingsMap(newArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bookingsMap]);

  return (
    <div className="AdminCalendar">
      <Scheduler data={schedulerData}>
        <ViewState />
        <WeekView startDayHour={8} endDayHour={18} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </div>
  );
}

export default AdminCalender;
