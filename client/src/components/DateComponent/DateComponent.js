import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"

const DateComponent = (props) => {
  const [date, setDate] = useState(format(new Date(), "yyyy/MM/dd"));

  useEffect(() =>{
    props.getDate(date)
  })

  const handleDate = (values) => {
    setDate(format(values, "yyyy/MM/dd"));
    props.getDate(format(values, "yyyy/MM/dd"))
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label="Event Date"
        value={date}
        onChange={handleDate}
        format={"yyyy/MM/dd"}
        minDate={new Date()}
        inputRef={(params) => <TextField {...params} />}
      />
    </MuiPickersUtilsProvider>
  );
};
DateComponent.propTypes = {
  response: PropTypes.func,
};
export default DateComponent;
