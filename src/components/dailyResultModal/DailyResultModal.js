import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";

import { BasicInput } from "../BasicInput/BasicInput";
import CustomButton from "../CustomButton/CustomButton";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./DailyResultModal.module.css";

function DailyResultModal({ close }) {
  const [sigCount, setsigCount] = useState("");

  function handleSubmit(evt) {
    close();
    evt.preventDefault();
    const sigInfo = { sigCount };
    console.log(sigInfo);
  }
  return (
    <>
      <div className={styles.modalHead}>
        <h1 className={styles.modalTitle}>
          Сколько сигарет за сегодня Вы выкурили?{" "}
        </h1>
        <p className={styles.modalText}>
          Даавайте вместе постараемся свести это число к нулю.
        </p>
        <div className={styles.modalBody}>
          <ul className={styles.modalBodyList}>
            <li className={styles.modalBodyItem}>
              <h2 className={styles.modalBodyText}>Количество сигарет</h2>
            </li>
          </ul>
          <form className={styles.modalBodyForm} onSubmit={handleSubmit}>
            <BasicInput
              name={"sigCount"}
              value={sigCount}
              placeholder={"__.__шт"}
              handleChange={setsigCount}
              inputWidth={220}
            />
            <div className={styles.modalButtons}>
              <button
                className={styles.modalBodyButtonCancle}
                onClick={() => close()}
              >
                Отмена
              </button>
              <button
                type="submit"
                className={styles.modalBodyButtonSubmit}
                //   onClick={() => close()}
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default modalBackDrop(DailyResultModal);
