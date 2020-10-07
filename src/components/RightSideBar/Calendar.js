import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import style from "./Calendar.module.css";
import moment from "moment";

import "./datepicker.css";
import { useDispatch } from "react-redux";
import { addCurrentDay } from "../../redux/currentDay/currentDayAction";
import { useHistory } from "react-router";

registerLocale("ru", ru);

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    history.push("/make-it-habit/check-list");
    const currentDate = moment(startDate).format();
    dispatch(addCurrentDay(currentDate.split("T")[0]));
  }, [startDate]);

  // const click = () => {
  //   console.log(startDate);
  // };

  // const calendar = document.querySelector(".react-datepicker__month");
  // console.log("calendar", calendar);
  // const handleClick = () => {
  //   console.log("кликнули по календарю");
  //   history.push("/");
  // };
  // if (calendar !== null) {
  //   calendar.addEventListener("click", handleClick);
  // }

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
