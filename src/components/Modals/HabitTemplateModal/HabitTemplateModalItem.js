import React, { useState } from "react";
import "./habitTemplateModal.css";
import { defaultHabits } from "./habitsArrayForDraw";
import { v4 as uuidv4 } from "uuid";
import CustomHabitModal from "../CustomHabitModal/CustomHabitModal";

function HabitTemplateModalItem() {
  
  const [modalShow, setModalShow] = useState(false);
  const [valueOfButton, setValueOfButton] = useState("")

   const close = () => {
     setModalShow((prev) => !prev);
   };

  const handleClickBtn = (target) => {
    setModalShow(true);
    // console.log("target.textContent", target.textContent);
    setValueOfButton(target.textContent);
  }
  
 

  return (
    <ul className="habit-template-list">
      {defaultHabits.map((el) => (
        <li className="habit-template-item" key={uuidv4()}>
          {modalShow && (
            <CustomHabitModal close={close} textOfHabit={valueOfButton} />
          )}
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
