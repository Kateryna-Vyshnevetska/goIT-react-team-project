import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import style from "./DateInput.module.css";

function DateInput({
  forLabel,
  id,
  labelText,
  value,
  name,
  handleChange,
  placeholder,
  labelWidth,
  inputWidth,
  type,
  marginBottom,
}) {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <div style={{ marginBottom: marginBottom }}>
      <label
        for={forLabel}
        className={style.label}
        style={{ width: labelWidth }}
      >
        {labelText}
      </label>

      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
    </div>
  );
}

export default DateInput;
