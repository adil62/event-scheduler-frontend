import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const appointments = [
  {
    title: "Website Re-Design Plan 421",
    startDate: new Date(2021, 1, 13, 9, 30),
    endDate: new Date(2021, 1, 13, 11, 30),
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 6, 23, 12, 0),
    endDate: new Date(2018, 6, 23, 13, 0),
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 6, 23, 14, 30),
    endDate: new Date(2018, 6, 23, 15, 30),
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 6, 24, 10, 0),
    endDate: new Date(2018, 6, 24, 11, 0),
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2020, 6, 24, 10, 0),
    endDate: new Date(2020, 6, 24, 11, 0),
  },
  {
    title: "Approve Personal Computer Upgrade Plan22",
    startDate: new Date(2020, 6, 24, 10, 0),
    endDate: new Date(2020, 6, 24, 11, 0),
  },
  {
    title: "Approve Personal Computer Upgrade Plan33",
    startDate: new Date(2021, 6, 24, 10, 0),
    endDate: new Date(2021, 6, 24, 11, 0),
  },
  {
    title: "Approve Personal Computer Upgrade Plan44",
    startDate: new Date(2020, 6, 24, 10, 0),
    endDate: new Date(2020, 6, 24, 11, 0),
  },
];

const Calender = () => (
  <Box>
    <Typography component="h1" variant="h5">
      View schedules
    </Typography>
    <Paper>
      <Scheduler data={appointments}>
        <ViewState defaultCurrentDate="2021-02-21" />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm readOnly />
      </Scheduler>
    </Paper>
  </Box>
);

export default Calender;
