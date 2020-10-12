import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import "./react-datepicker.css";
import style from "./DateInput.module.css";

registerLocale("ru", ru);

function DateInput({
  disabledFor,
  register,
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
  // если что то дропнется то в юз стейт был  => new Date()

  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => {
    console.log("Calendar closed");
  };
  const handleCalendarOpen = () => {
    console.log("Calendar opened");
  };

  return (
    <div
      style={{
        marginTop: "0px",
        marginBottom: marginBottom,
        display: "flex",
        alignItems: "center",
      }}
    >
      <label
        htmlFor={forLabel}
        className={style.label}
        style={{ width: labelWidth }}
      >
        {labelText}
      </label>
      <div className="habitsCalendar">
        <DatePicker
          disabled={disabledFor}
          className={style.input}
          // minDate={new Date()}
          requared
          locale="ru"
          selected={date}
          id={forLabel}
          onChange={(date) => {
            setDate(date);
            handleChangeDate(date);
          }}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
          placeholderText="Select a weekday"
        />
      </div>
    </div>
  );
}

export default DateInput;
