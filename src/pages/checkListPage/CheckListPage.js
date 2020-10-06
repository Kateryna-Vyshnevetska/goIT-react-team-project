import React, { useEffect, useState } from "react";
import "./checkListPage.css";
import { useDispatch, useSelector } from "react-redux";
import { HabitItem } from "../../pages/checkListPage/HabitItem";
import DailyResultModal from "../../components/dailyResultModal/DailyResultModal";
import FindHabitById from "../../helpers/FindHabitById";
import moment from "moment";

import { updateDateInUserHabit } from "../../redux/operations";
import { authToken } from "../../redux/selectors";
import {
  calculateDoneCountHabits,
  calculateMissedCountHabits,
} from "../../helpers/counterProgressByHabit";

export function CheckListPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const dateNow = useSelector((state) => state.currentDay);
  const [modalShow, setModalShow] = useState(false);
  const userHabits = useSelector((state) => state.userHabits);
  const userHabitsDates = useSelector((state) => state.usersHabitsDates);

  const arr = [];

  userHabits.map((habits) =>
    userHabitsDates.map(
      (dates) =>
        habits._id === dates.habitId &&
        dates.dates.map((date) => dateNow === date.split("T")[0] && arr.push(habits))
    )
  );

  const close = () => {
    setModalShow((prev) => !prev);
  };

  // const datanew = new Date();
  // const newDataFormat = moment(datanew).format();

  // const [done, setDone] = useState(0);
  // const [missed, setMissed] = useState(0);
  // const [idFromState, setIdFromState] = useState("");

  // useEffect(() => {
  //   setDone(calculateDoneCountHabits(userHabits, idFromState));
  //   setMissed(calculateMissedCountHabits(userHabits, idFromState));
  // }, [idFromState, userHabits]);

  // const handleClickHabitButtonDone = (id) => {
  //   const habitNumberCounter = document.getElementById(id);
  //   const buttonDoneActive = document.getElementById(`${id}done`);
  //   const buttonMissedActive = document.getElementById(`${id}missed`);

  //   habitNumberCounter.classList.add("isVisible");
  //   buttonDoneActive.classList.add("active");
  //   buttonMissedActive.classList.remove("active");

  //   setIdFromState(id);

  //   console.log("кликнули на сделано");

  //   // находим даты конкретно это привычки
  //   const userHabitDates = userHabitsDates.find((el) => el.habitId === id)
  //     .dates;

  //   // ищем индекс нужного елемента для записи в массив

  //   const indx = userHabitDates.find((el, idx) =>
  //     el.split("T")[0] === newDataFormat.split("T")[0] ? el[idx] : ""
  //   );

  //   const indexOfDate = userHabitDates.indexOf(indx);

  //   dispatch(updateDateInUserHabit("done", id, indexOfDate, authToken(state)));
  // };

  // const handleClickHabitButtonMissed = (id) => {
  //   const habitNumberCounter = document.getElementById(id);
  //   const buttonMissedActive = document.getElementById(`${id}missed`);
  //   const buttonDoneActive = document.getElementById(`${id}done`);

  //   habitNumberCounter.classList.add("isVisible");
  //   buttonMissedActive.classList.add("active");
  //   buttonDoneActive.classList.remove("active");
  //   setIdFromState(id);

  //   console.log("кликнули на пропущено");

  //   // находим даты конкретно это привычки
  //   const userHabitDates = userHabitsDates.find((el) => el.habitId === id)
  //     .dates;

  //   // ищем индекс нужного елемента для записи в массив

  //   const indx = userHabitDates.find((el, idx) =>
  //     el.split("T")[0] === newDataFormat.split("T")[0] ? el[idx] : ""
  //   );

  //   const indexOfDate = userHabitDates.indexOf(indx);

  //   dispatch(
  //     updateDateInUserHabit("missed", id, indexOfDate, authToken(state))
  //   );
  // };

  return (
    <div className="check-list-section">
      <div className="habit-container">
        <div className="habit-header">
          <h2 className="habit-header-title">Чек-лист привычек</h2>
          <button onClick={() => setModalShow(true)} className="habit-header-button">
            + Сигареты за сегодня
          </button>
          {modalShow && <DailyResultModal close={close} />}
        </div>
        <ul className="habit-list">
          
// <<<<<<< notificationFinalEdition
//           {arr.length ? (
//             arr.map((el) => (
//               <HabitItem
//                 clickDone={handleClickHabitButtonDone}
//                 clickMissed={handleClickHabitButtonMissed}
//                 key={el._id}
//                 id={el._id}
//                 habitTitle={el.name}
//                 linearProgressValue={el.efficiency}
//               />
//             ))
//           ) : (
//             <p className="notificationText">
//               Вы пока не выбрали привычки, над которыми хотите работать
//             </p>
//           )}
// =======
          
          {arr.map((el) => (
            <HabitItem
              // clickDone={handleClickHabitButtonDone}
              // clickMissed={handleClickHabitButtonMissed}
              key={el._id}
              id={el._id}
              habitTitle={el.name}
              linearProgressValue={el.efficiency}
              // habitMissedNumber={missed}
              // habitDoneNumber={done}
            />
          ))}

        </ul>
      </div>
    </div>
  );
}
