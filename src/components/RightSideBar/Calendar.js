import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
// CSS Modules, react-datepicker-cssmodules.css
import "./datepicker.css";

registerLocale("ru", ru);

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        locale="ru"
        onChange={(date) => setStartDate(date)}
        inline
      />
    </>
  );
};
