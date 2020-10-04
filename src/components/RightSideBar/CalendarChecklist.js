import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabitAndGetAllHabits } from "../../redux/operations";
import style  from "./rightSideBar.module.css";
import { authToken, userHabits, usersHabitsDates } from "../../redux/selectors";

export const CalendarChecklist = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteHabit = (id) => {
    dispatch(deleteHabitAndGetAllHabits(id, authToken(state)));
  };

  return (
    <ul className={style.calendarChecklist}>
      {userHabits(state).map((el) => (
        <li key={el._id} className={style.calendarItem}>
          <div className={style.calendarChecklistItem}>
            <span
              className={
                false
                  ? style.calendarChecklistItemProgress
                  : style.calendarChecklistItemProgressDone
              }
            >
              {false && "time"}
            </span>
            <span
              className={
                false
                  ? style.calendarChecklistItemText
                  : style.calendarChecklistItemTextDone
              }
            >
              {el.name}
            </span>
            <button
              onClick={() => deleteHabit(el._id)}
              className={style.calendarChecklistItemButton}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};
