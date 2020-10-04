import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./habitsBar.css";
import { HabitItem } from "./habitItem/HabitItem";
import HabitChoiceModal from "../../habitChoiceModal/HabitChoiceModal";

export const HabitsBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const userHabits = useSelector((state) => state.userHabits);

  const close = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <>
      <div className="leftSideBar-habits">
        <div className="leftSideBar-wrapper">
          <h3 className="leftSideBar-habitsTitle">Привычки</h3>
          <ul className="leftSideBar-habits-list">
            {userHabits.map((el) => (
              <HabitItem nameOfHabit={el.name} elemId={el._id} key={el._id} />
            ))}
          </ul>
          {modalShow && <HabitChoiceModal close={close} />}
        </div>
        <button
          onClick={() => setModalShow(true)}
          className="leftSideBar-habits-btn"
        >
          Добавить привычку <span className="leftSideBar-habits-plus">+</span>
        </button>
      </div>
    </>
  );
};
