import React, { useState } from "react";
import "./habitTemplateModal.css";
import { defaultHabits } from "./habitsArrayForDraw";
import { v4 as uuidv4 } from "uuid";
import CustomHabitModal from "../CustomHabitModal/CustomHabitModal";
import { useSelector } from "react-redux";

function HabitTemplateModalItem({ close, setValueOfButton, setModalShowNew }) {
  const userHabitsName = useSelector((state) => state.userHabits.map((el) => el.name));
  const TemplateHabits = defaultHabits.filter((habit) => !userHabitsName.includes(habit));

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
            userHabitsName.includes(el)
              ? "habit-template-item-disabled"
              : "habit-template-item"
          }
          key={uuidv4()}
        >
          <button
            to="#"
            className={
              userHabitsName.includes(el)
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
