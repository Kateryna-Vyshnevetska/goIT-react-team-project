import React from "react";
import {
  calendarChecklistItem,
  calendarChecklist,
  calendarChecklistItemProgress,
  calendarChecklistItemProgressDone,
  calendarChecklistItemText,
  calendarChecklistItemTextDone,
  calendarChecklistItemButton,
} from "./rightSideBar.module.css";

export const CalendarChecklist = () => {
  return (
    <ul className={calendarChecklist}>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
      <li>
        <div className={calendarChecklistItem}>
          <span
            className={
              false
                ? calendarChecklistItemProgress
                : calendarChecklistItemProgressDone
            }
          >
            {false && "time"}
          </span>
          <span
            className={
              false ? calendarChecklistItemText : calendarChecklistItemTextDone
            }
          >
            Привычкаарп пладвадвламд вмовт млжоватм жвамтва
          </span>
          <button className={calendarChecklistItemButton}></button>
        </div>
      </li>
    </ul>
  );
};
