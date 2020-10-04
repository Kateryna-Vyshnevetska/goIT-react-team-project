import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabitAndGetAllHabits } from "../../redux/operations";
import style from "./rightSideBar.module.css";
import { authToken, userHabits, usersHabitsDates } from "../../redux/selectors";
import moment from "moment";

export const CalendarChecklist = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const userHabitsDates = usersHabitsDates(state);
  const dateToday = new Date();
  const dateNow = moment(dateToday).format();
  const arr = [];
  const allUserHabits = userHabits(state);

  allUserHabits.map((habites) =>
    userHabitsDates.map((dates) => {
      if (habites._id === dates.habitId) {
        dates.dates.map((date) => {
          if (dateNow.split("T")[0] === date.split("T")[0]) {
            arr.push(habites);
            return;
          }
        });
      }
    })
  );

  const deleteHabit = (id) => {
    dispatch(deleteHabitAndGetAllHabits(id, authToken(state)));
  };

  return (
    <ul className={style.calendarChecklist}>
      {arr.map((el) => (
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
