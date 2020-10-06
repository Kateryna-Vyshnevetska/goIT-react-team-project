import React, { useState } from "react";
import "./checkListPage.css";
import { useSelector } from "react-redux";
import { HabitItem } from "../../pages/checkListPage/HabitItem";
import DailyResultModal from "../../components/dailyResultModal/DailyResultModal";

export function CheckListPage() {
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

  const handleClickHabitButtonDone = (id) => {
    const habitNumberCounter = document.getElementById(id);
    const buttonDoneActive = document.getElementById(`${id}done`);
    const buttonMissedActive = document.getElementById(`${id}missed`);

    habitNumberCounter.classList.toggle("isVisible");
    buttonDoneActive.classList.toggle("active");
    buttonMissedActive.classList.remove("active");
  };

  const handleClickHabitButtonMissed = (id) => {
    const habitNumberCounter = document.getElementById(id);
    const buttonMissedActive = document.getElementById(`${id}missed`);
    const buttonDoneActive = document.getElementById(`${id}done`);

    habitNumberCounter.classList.toggle("isVisible");
    buttonMissedActive.classList.toggle("active");
    buttonDoneActive.classList.remove("active");
  };

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
          {arr.length ? (
            arr.map((el) => (
              <HabitItem
                clickDone={handleClickHabitButtonDone}
                clickMissed={handleClickHabitButtonMissed}
                key={el._id}
                id={el._id}
                habitTitle={el.name}
                linearProgressValue={el.efficiency}
              />
            ))
          ) : (
            <p className="notificationText">
              Вы пока не выбрали привычки, над которыми хотите работать
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
