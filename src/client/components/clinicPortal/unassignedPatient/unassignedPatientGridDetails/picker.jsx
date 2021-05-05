import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const Picker = function (props) {
  const handleChange = (event) => {
    props.onChange(event);
  };

  return (
    <div>
      <DateTimePicker onChange={handleChange} value={props.dtValue} />
    </div>
  );
};

export default Picker;
