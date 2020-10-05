import React from "react";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import HabitTemplateModalItem from "../HabitTemplateModal/HabitTemplateModalItem";
import "./habitTemplateModal.css";

function HabitTemplateModal({
  modalTitle = "Шаблонные привычки",
  setModalShow,
  close,
  setValueOfButton,
  setModalShowNew,
  valueOfButton,
}) {
  const goBack = () => {
    setModalShow(true);
    close();
  };
  return (
    <div className="wrapper">
      <h3 className="title">{modalTitle}</h3>
      <HabitTemplateModalItem
        close={close}
        setValueOfButton={setValueOfButton}
        setModalShowNew={setModalShowNew}
        valueOfButton={valueOfButton}
      />
      <button onClick={() => goBack()} className="btn-back">
        Назад
      </button>
      <button onClick={() => close()} className="modalBodyButtonclose"></button>
    </div>
  );
}

export default modalBackDrop(HabitTemplateModal);
