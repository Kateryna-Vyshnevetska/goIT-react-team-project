import React from "react";
import { rightSideBarHeader, headerWeekDay } from "./rightSideBar.module.css";
import moment from "moment";
import "moment/locale/ru";

moment().locale("ru");
const date = moment().format("LL");
const dayOfWeek = moment().format("dddd");
const dateOfDay = date.substr(0, date.length - 8);

export const RightSideBarHeader = () => {
  return (
    <div className={rightSideBarHeader}>
      <span className={headerWeekDay}>{dayOfWeek} &bull;&nbsp;</span>
      {dateOfDay}
    </div>
  );
};
