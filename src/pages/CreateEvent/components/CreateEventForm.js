/* eslint-disable no-unused-vars */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import AuthAPI from "../../../api/Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  timePickerWrapper: {
    margin: theme.spacing(1),
  },
  timePicker: {
    margin: theme.spacing(1),
  },
  dayPicker: {
    margin: theme.spacing(1),
  },
  dayOfTheWeek: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CreateEventForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dayOfWeek: [days[0]],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create a new event
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="desc"
            label="Description"
            type="desc"
            id="desc"
            autoComplete="current-desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
            error={formik.touched.desc && Boolean(formik.errors.desc)}
            helperText={formik.touched.desc && formik.errors.desc}
          />

          <TextField
            className={classes.timePicker}
            id="startTime"
            name="startTime"
            label="Start time"
            type="time"
            margin="normal"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={formik.values.startTime}
            onChange={formik.handleChange}
          />
          <TextField
            className={classes.timePicker}
            id="endTime"
            name="endTime"
            label="End time"
            type="time"
            defaultValue="07:30"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={formik.values.endTime}
            onChange={formik.handleChange}
          />

          <Select
            fullWidth
            className={classes.dayOfTheWeek}
            labelId="dayOfWeekLabel"
            id="dayOfWeek"
            name="dayOfWeek"
            multiple
            value={formik.values.dayOfWeek}
            onChange={formik.handleChange}
          >
            {days.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>

          <Button type="submit" fullWidth variant="contained" color="primary">
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CreateEventForm;
