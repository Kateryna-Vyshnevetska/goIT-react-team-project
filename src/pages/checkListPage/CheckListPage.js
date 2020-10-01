import React from "react";
import "./checkListPage.css";
import { useSelector } from "react-redux";
import { HabitItem } from "../../pages/checkListPage/HabitItem";
import { userHabits } from "../../redux/selectors";

export function CheckListPage() {
  const state = useSelector((state) => state);
  console.log(userHabits(state));

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
      <div className="rightSideBar"></div>
      <div className="habit-container">
        <div className="habit-header">
          <h2 className="habit-header-title">Чек-лист привычек</h2>
          <button className="habit-header-button">+ Сигареты за сегодня</button>
        </div>
        <ul className="habit-list">
          {userHabits(state).map((el) => (
            <HabitItem
              clickDone={handleClickHabitButtonDone}
              clickMissed={handleClickHabitButtonMissed}
              key={el._id}
              id={el._id}
              habitTitle={el.name}
              linearProgressValue={el.efficiency}
            />
          ))}
        </ul>
      </div>
      <div className="leftSideBar"></div>
    </div>
  );
}
