import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertTitle, Grid } from "@mui/material";

const StatusAlert = (props) => {
  if (props.response.status === 201) {
    return (
      <Grid item xs={12}>
        <Alert severity="success">
          <AlertTitle>Event created</AlertTitle>
          Your event has been created
        </Alert>
      </Grid>
    );
  }
  if (props.response === "Server error") {
    return (
      <Grid item xs={12}>
        <Alert severity="error">
          <AlertTitle>Server Error</AlertTitle>
          There is a problem with our server
        </Alert>
      </Grid>
    );
  }
  if (props.response.status === 400) {
    return (
      <Grid item xs={12}>
        <Alert severity="warning">
          <AlertTitle>Invalid Data</AlertTitle>
          The data you entered is invalid
        </Alert>
      </Grid>
    );
  } else return false;
};
StatusAlert.propTypes = {
  response: PropTypes.object,
};

export default StatusAlert;
