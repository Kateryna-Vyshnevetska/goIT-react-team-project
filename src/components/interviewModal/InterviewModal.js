import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";

import { BasicInput } from "../BasicInput/BasicInput";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./InterviewModal.module.css";

function InterviewModal({ close }) {
  const [smokeYears, setsmokeYears] = useState("");
  const [smokeInDay, setsmokeInDay] = useState("");
  const [timeOnOneSig, settimeOnOneSig] = useState("");
  const [sigCost, setsigCost] = useState("");

  function handleSubmit(evt) {
    close();
    evt.preventDefault();
    const sigInfo = { smokeYears, smokeInDay, timeOnOneSig, sigCost };
    console.log(sigInfo);
  }
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
          <form className={styles.modalBodyForm} onSubmit={handleSubmit}>
            <BasicInput
              name={"smokeYears"}
              value={smokeYears}
              placeholder={"0"}
              handleChange={setsmokeYears}
              inputWidth={220}
            />
            <BasicInput
              name={"smokeInDay"}
              value={smokeInDay}
              placeholder={"0"}
              handleChange={setsmokeInDay}
              inputWidth={220}
            />
            <BasicInput
              name={"timeOnOneSig"}
              value={timeOnOneSig}
              placeholder={"__min"}
              handleChange={settimeOnOneSig}
              inputWidth={220}
            />
            <BasicInput
              name={"sigCost"}
              value={sigCost}
              placeholder={"__.__grn"}
              handleChange={setsigCost}
              inputWidth={220}
            />

            <button
              type="submit"
              className={styles.modalBodyButton}
              //   onClick={() => close()}
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default modalBackDrop(InterviewModal);
