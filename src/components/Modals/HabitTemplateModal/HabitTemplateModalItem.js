import React, { useState } from "react";
import "./habitTemplateModal.css";
import { defaultHabits } from "./habitsArrayForDraw";
import { v4 as uuidv4 } from "uuid";
import CustomHabitModal from "../CustomHabitModal/CustomHabitModal";

function HabitTemplateModalItem({ close, setValueOfButton, setModalShowNew }) {
  const handleClickBtn = (target) => {
    close();
    setModalShowNew(true);
    // console.log("target.textContent", target.textContent);
    setValueOfButton(target.textContent);
  };

  return (
    <ul className="habit-template-list">
      {defaultHabits.map((el) => (
        <li className="habit-template-item" key={uuidv4()}>
          <button
            to="#"
            className="habit-template-btn"
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
