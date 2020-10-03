import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import "./react-datepicker.css";
import style from "./DateInput.module.css";

registerLocale("ru", ru);

function DateInput({
  forLabel,
  id,
  labelText,
  value,
  name,
  handleChangeDate,
  placeholder,
  labelWidth,
  inputWidth,
  type,
  marginBottom,
}) {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => {
    console.log("Calendar closed");
  };
  const handleCalendarOpen = () => {
    console.log("Calendar opened");
  };

  return (
    <div style={{ marginBottom: marginBottom }}>
      <label
        htmlFor={forLabel}
        className={style.label}
        style={{ width: labelWidth }}
      >
        {labelText}
      </label>
      <div className="habitsCalendar" style={{ borderRadius: "10px" }}>
        <DatePicker
          locale="ru"
          selected={date}
          onChange={(date) => {
            setDate(date);
            handleChangeDate(date);
          }}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />
      </div>
    </div>
  );
}

export default DateInput;
