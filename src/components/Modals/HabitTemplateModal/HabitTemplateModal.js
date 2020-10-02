import React from "react";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import HabitTemplateModalItem from "../HabitTemplateModal/HabitTemplateModalItem";
import "./habitTemplateModal.css";

function HabitTemplateModal({ modalTitle = "Шаблонные привычки", close }) {
  return (
    <div className="wrapper">
      <h3 className="title">{modalTitle}</h3>
      <HabitTemplateModalItem />
      <button onClick={() => close()} className="btn-back">
        Назад
      </button>
      <button onClick={() => close()} className="modalBodyButtonclose"></button>
    </div>
  );
}

export default modalBackDrop(HabitTemplateModal);
