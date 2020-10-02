import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabitAndGetAllHabits } from "../../redux/operations";
import { authToken, userHabits } from "../../redux/selectors";
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
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteHabit = (id) => {
    dispatch(deleteHabitAndGetAllHabits(id, authToken(state)));
  };

  return (
    <ul className={calendarChecklist}>
      {userHabits(state).map((el) => (
        <li key={el._id}>
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
                false
                  ? calendarChecklistItemText
                  : calendarChecklistItemTextDone
              }
            >
              {el.name}
            </span>
            <button
              onClick={() => deleteHabit(el._id)}
              className={calendarChecklistItemButton}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};
