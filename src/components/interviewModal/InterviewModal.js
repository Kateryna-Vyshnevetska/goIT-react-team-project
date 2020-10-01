import React from "react";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./InterviewModal.module.css";
function InterviewModal({ close }) {
  return (
    <>
      <div className={styles.modalHead}>
        <h1 className={styles.modalTitle}>Ответьте на 4 коротких вопроса. </h1>
        <p className={styles.modalText}>
          Так мы сможем более точно дать вам рекомендации:
        </p>
        <div className={styles.modalBody}>
          <ul className={styles.modalBodyList}>
            <li className={styles.modalBodyItem}>
              <h2 className={styles.modalBodyText}>Сколько лет Вы курите?</h2>
            </li>
            <li className={styles.modalBodyItem}>
              <h2 className={styles.modalBodyText}>
                Сколько сигарет скуриваете в день?
              </h2>
            </li>
            <li className={styles.modalBodyItem}>
              <h2 className={styles.modalBodyText}>
                Сколько вемени у Вас уходит на 1 сигарету?
              </h2>
            </li>
            <li className={styles.modalBodyItem}>
              <h2 className={styles.modalBodyText}>
                Сколько стоит одна пачка сигарет?
              </h2>
            </li>
          </ul>
          <form className={styles.modalBodyForm}>
            <input className={styles.modalBodyInput}></input>
            <input className={styles.modalBodyInput}></input>
            <input className={styles.modalBodyInput}></input>
            <input className={styles.modalBodyInput}></input>
            <button className={styles.modalBodyButton} onClick={() => close()}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default modalBackDrop(InterviewModal);
