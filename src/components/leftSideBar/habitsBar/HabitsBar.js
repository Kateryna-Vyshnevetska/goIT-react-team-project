import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./habitsBar.css";
import { HabitItem } from "./habitItem/HabitItem";
import HabitChoiceModal from "../../habitChoiceModal/HabitChoiceModal";
import HabitTemplateModal from "../../Modals/HabitTemplateModal/HabitTemplateModal";
import CustomHabitModal from "../../Modals/CustomHabitModal/CustomHabitModal";
export const HabitsBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowTemplate, setModalShowTemplate] = useState(false);
  const [modalShowNew, setModalShowNew] = useState(false);
  const userHabits = useSelector((state) => state.userHabits);
  const [valueOfButton, setValueOfButton] = useState("");

  const close = () => {
    setValueOfButton("");
    setModalShow((prev) => !prev);
  };

  const closeModalTemplate = () => {
    setModalShowTemplate((prev) => !prev);
  };

  const closeModalNew = () => {
    setModalShowNew((prev) => !prev);
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
           <button
          onClick={() => setModalShow(true)}
          className="leftSideBar-habits-btn"
        >
          Добавить привычку <span className="leftSideBar-habits-plus">+</span>
        </button>
          {modalShow && (
            <HabitChoiceModal
              close={close}
              setModalShowTemplate={setModalShowTemplate}
              setModalShowNew={setModalShowNew}
            />
          )}
          {modalShowTemplate && (
            <HabitTemplateModal
              setModalShow={setModalShow}
              close={closeModalTemplate}
              setValueOfButton={setValueOfButton}
              setModalShowNew={setModalShowNew}
              valueOfButton={valueOfButton}
            />
          )}
          {modalShowNew && (
            <CustomHabitModal
              close={closeModalNew}
              setModalShow={setModalShow}
              textOfHabit={valueOfButton.length > 0 ? valueOfButton : null}
              settextOfHabit={setValueOfButton}
            />
          )}
        </div>
       
      </div>
    </>
  );
};
