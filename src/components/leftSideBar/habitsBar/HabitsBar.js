import React, { useState } from "react";
import "./habitsBar.css";
import { HabitItem } from "./habitItem/HabitItem";
import HabitChoiceModal from "../../habitChoiceModal/HabitChoiceModal";
export const HabitsBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const close = () => {
    setModalShow((prev) => !prev);
  };
  return (
    <>
      <div className="leftSideBar-habits">
        <h3 className="leftSideBar-habitsTitle">Привычки</h3>
        <ul className="leftSideBar-habits-list">
          <HabitItem />
          <HabitItem />
          <HabitItem />
          <HabitItem />
          <HabitItem />
          <HabitItem />
          <HabitItem />
          <HabitItem />
          <HabitItem />
        </ul>

        <button
          onClick={() => setModalShow(true)}
          className="leftSideBar-habits-btn"
        >
          {" "}
          Добавить привычку <span className="leftSideBar-habits-plus">+</span>
        </button>
        {modalShow && <HabitChoiceModal close={close} />}
      </div>
    </>
  );
};
