import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Grid, Button } from "@mui/material";
import DateComponent from "../DateComponent/DateComponent";
import isEmail from "validator/lib/isEmail";
import PropTypes from "prop-types";

const EventForm = (props) => {
  const [eventDate, setEventDate] = useState("0000/00/00");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  //this function is passed as a prop to the DatePicker
  const dateValue = (evDate) => {
    setEventDate(evDate);
  };

  //executes http request in AddEvent.js
  const doSubmit = (data) => {
    props.onSubmit(data, eventDate);
  };

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item xs={6} md={4}>
          <TextField
            variant="standard"
            label="First Name"
            data-testid="name-input"
            {...register("firstName", { required: true })}
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? "Field required" : " "}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            variant="standard"
            label="Last Name"
            data-testid="lastname-input"
            {...register("lastName", { required: true })}
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? "Field required" : " "}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            variant="standard"
            label="Email"
            data-testid="email-input"
            {...register("email", { required: true, validate: isEmail })}
            error={errors.email ? true : false}
            helperText={
              errors.email && errors.email.type === "required"
                ? "Field required"
                : errors.email && errors.email.type === "validate"
                ? "Invalid email format"
                : " "
            }
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <DateComponent getDate={dateValue} />
        </Grid>
        <Grid item xs={6}>
          <Button
            className="submitButton"
            type="submit"
            data-testid="submit-button"
            disabled={!isValid}
            variant="contained"
          >
            ADD NEW EVENT
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

EventForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default EventForm;
