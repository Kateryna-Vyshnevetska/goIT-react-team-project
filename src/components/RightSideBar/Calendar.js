import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import "./react-datepicker.css";

registerLocale("ru", ru);

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      locale="ru"
      onChange={(date) => setStartDate(date)}
      inline
    />
  );
};
