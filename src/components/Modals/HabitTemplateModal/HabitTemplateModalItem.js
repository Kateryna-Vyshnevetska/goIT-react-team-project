import React, { useState } from "react";
import "./habitTemplateModal.css";
import { defaultHabits } from "./habitsArrayForDraw";
import { v4 as uuidv4 } from "uuid";
import CustomHabitModal from "../CustomHabitModal/CustomHabitModal";
import { useSelector } from "react-redux";

function HabitTemplateModalItem({ close, setValueOfButton, setModalShowNew }) {
  const userHabits = useSelector((state) => state.userHabits);
  const isActiveHabits = userHabits
    .filter((habit) => habit.data.some((el) => el === null))
    .map((el) => el.name);

  const handleClickBtn = (target) => {
    close();
    setModalShowNew(true);
    setValueOfButton(target.textContent);
  };

  return (
    <ul className="habit-template-list">
      {defaultHabits.map((el) => (
        <li
          className={
            isActiveHabits.includes(el)
              ? "habit-template-item-disabled"
              : "habit-template-item"
          }
          key={uuidv4()}
        >
          <button
            to="#"
            className={
              isActiveHabits.includes(el)
                ? "habit-template-btn-disabled"
                : "habit-template-btn"
            }
            onClick={(evt) => handleClickBtn(evt.target)}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default HabitTemplateModalItem;
