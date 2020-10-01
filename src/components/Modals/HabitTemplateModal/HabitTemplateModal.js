import React from "react";
import HabitTemplateModalItem from "../HabitTemplateModal/HabitTemplateModalItem";
import "./habitTemplateModal.css";

function HabitTemplateModal({ modalTitle = "Шаблонные привычки" }) {
  return (
    <div className="wrapper">
      <h3 className="title">{modalTitle}</h3>
      <HabitTemplateModalItem />
      <button className="btn-back">Назад</button>
    </div>
  );
}

export default HabitTemplateModal;
