import React, { useState, useEffect } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import EventAPI from "../../../api/Event";

const useStyles = makeStyles((theme) => ({
  mb3: {
    marginBottom: theme.spacing(2),
  },
}));

// replace existing time with given time string in the date string.
const replaceTimeInDate = (dateString, timeString, name) => {
  if (!dateString || !timeString) return;

  let dateArr = dateString.split(" ");

  return dateArr[0] + " " + timeString;
};

const Calender = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    EventAPI.show().then((res) => {
      setAppointments(
        res?.data?.schedules.map((item) => ({
          title: item.name,
          startDate: new Date(
            replaceTimeInDate(item.schedule_date, item.start_time, item.name)
          ),
          endDate: new Date(
            replaceTimeInDate(item.schedule_date, item.end_time, item.name)
          ),
        }))
      );
    });
  }, []);
  console.log(appointments);

  return (
    <Box>
      <Typography component="h1" variant="h5" className={classes.mb3}>
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
};

export default Calender;
