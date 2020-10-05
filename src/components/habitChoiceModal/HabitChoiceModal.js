import React, { useState } from "react";

import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./HabitChoiceModal.module.css";

function HabitChoiceModal({ close, setModalShowNew, setModalShowTemplate }) {
  const openModalShowTemplate = async () => {
    await close();
    await setModalShowTemplate(true);
  };
  const openModalShowNew = async () => {
    await close();
    await setModalShowNew(true);
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
              onClick={() => openModalShowTemplate()}
            >
              Выбрать шаблонную привычку +
            </button>
          </div>
          <div className={styles.modalBodyItem}>
            <p className={styles.modalText}>или создать свою собственную</p>
            <button
              className={styles.modalBodyButtonAdd}
              onClick={() => openModalShowNew()}
            >
              Добавить свою привычку +
            </button>
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
