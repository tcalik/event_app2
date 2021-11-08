import React, { useState } from "react";
import http from "../../http-common";
import { Card, Typography } from "@mui/material";
import StatusAlert from "../StatusAlert/StatusAlert";
import "./AddEvent.css";
import EventForm from "../EventForm/EventForm";

const AddEvent = () => {
  const [serverResponse, setServerResponse] = useState();

  const onSubmit = (data, eventDate) => {
    const request = { ...data, eventDate: eventDate };

    http
      .post("/addEvent", request)
      .then((res) => {
        setServerResponse(res); //Renders different alerts depending on reponse code
      })
      .catch((err) => {
        setServerResponse("Server error");
      });
  };

  return (
    <Card variant="outlined" className="eventCard" sx={{ maxWidth: 320 }}>
      <Typography
        className="titleTypo"
        variant="h4"
        sx={{ maxWidth: 320 }}
        component="h4"
      >
        Add New Event
      </Typography>
      <EventForm onSubmit={onSubmit} />
      {serverResponse && <StatusAlert response={serverResponse} />}
    </Card>
  );
};

export default AddEvent;
