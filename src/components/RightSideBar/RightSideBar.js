import React from "react";
import { Calendar } from "./Calendar";
import { CalendarChecklist } from "./CalendarChecklist";
import style from "./rightSideBar.module.css";
import { RightSideBarHeader } from "./RightSideBarHeader";

export const RightSideBar = () => {
  return (
    <div className={style.rightSideBarContainer}>
      <div className={style.rightSideBarWrapper}>
        <RightSideBarHeader />
        <Calendar />
        <CalendarChecklist />
      </div>
    </div>
  );
};
