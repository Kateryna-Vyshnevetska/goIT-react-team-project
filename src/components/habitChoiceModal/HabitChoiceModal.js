import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";

import { BasicInput } from "../BasicInput/BasicInput";
import CustomButton from "../CustomButton/CustomButton";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./HabitChoiceModal.module.css";
import HabitTemplateModal from "../Modals/HabitTemplateModal/HabitTemplateModal";
import CustomHabitModal from "../Modals/CustomHabitModal/CustomHabitModal";
function HabitChoiceModal({ close }) {
  const [sigCount, setsigCount] = useState("");

  const [modalShowTemplate, setModalShowTemplate] = useState(false);
  const [modalShowNew, setModalShowNew] = useState(false);

  const closeModalTemplate = () => {
    setModalShowTemplate((prev) => !prev);
  };
  const closeModalNew = () => {
    close();
    setModalShowNew((prev) => !prev);
  };
  
  return (
    <>
      <div className={styles.modalHead}>
        <h1 className={styles.modalTitle}>Добавление привычки</h1>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyItem}>
            <p className={styles.modalText}>
              Вы можете выбрать привычку из предложенных вариантов
            </p>

            <button
              className={styles.modalBodyButtonChose}
              onClick={() => setModalShowTemplate(true)}
            >
              Выбрать шаблонную привычку +
            </button>
            {modalShowTemplate && (
              <HabitTemplateModal close={closeModalTemplate} />
            )}
          </div>
          <div className={styles.modalBodyItem}>
            <p className={styles.modalText}>или создать свою собственную</p>
            <button
              className={styles.modalBodyButtonAdd}
              onClick={() => setModalShowNew(true)}
            >
              Добавить свою привычку +
            </button>
            {modalShowNew && <CustomHabitModal close={closeModalNew} />}
          </div>
        </div>
        <button
          className={styles.modalBodyButtonCancle}
          onClick={() => close()}
        >
          Отмена
        </button>
        <button
          onClick={() => close()}
          className={styles.modalBodyButtonclose}
        ></button>
      </div>
    </>
  );
}

export default modalBackDrop(HabitChoiceModal);
