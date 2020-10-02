import React from "react";
import { Calendar } from "./Calendar";
import { CalendarChecklist } from "./CalendarChecklist";
import { rightSideBarContainer } from "./rightSideBar.module.css";
import { RightSideBarHeader } from "./RightSideBarHeader";

export const RightSideBar = () => {
  return (
    <div className={rightSideBarContainer}>
      <RightSideBarHeader />
      <Calendar />
      <CalendarChecklist />
    </div>
  );
};
