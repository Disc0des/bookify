import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  DateNavigator,
  TodayButton,
  WeekView,
  Toolbar,
  Appointments,
  Scheduler,
} from "@devexpress/dx-react-scheduler-material-ui";

function AdminCalender() {
  const schedulerData = [
    {
      startDate: "2022-05-02T09:00",
      endDate: "2022-05-02T10:00",
      title: "Sully",
    },
    {
      startDate: "2022-05-03T12:00",
      endDate: "2022-05-03T13:00",
      title: "Buddy",
    },
  ];

  return (
    <div id="AdminCalender">
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
