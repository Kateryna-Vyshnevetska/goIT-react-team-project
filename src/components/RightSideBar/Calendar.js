import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import style from './Calendar.module.css'

import "./datepicker.css";

registerLocale("ru", ru);

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={style.datePickerWrapper}>
      <DatePicker
        selected={startDate}
        locale="ru"
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};
