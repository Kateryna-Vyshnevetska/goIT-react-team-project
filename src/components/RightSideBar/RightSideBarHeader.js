import React from "react";
import { rightSideBarHeader, headerWeekDay } from "./rightSideBar.module.css";

export const RightSideBarHeader = () => {
  return (
    <div className={rightSideBarHeader}>
      <span className={headerWeekDay}>четверг &bull;&nbsp;</span>1 октября
    </div>
  );
};
