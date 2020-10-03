import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import axios from "axios";

import { BasicInput } from "../BasicInput/BasicInput";
import modalBackDropNoClose from "../modalBackDrop/ModalBackDropNoClose";
import styles from "./InterviewModal.module.css";
import { addUserQuizInfo } from "../../redux/quizInfo/quizInfoActions";
function InterviewModal({ close }) {
  const [smokeYears, setsmokeYears] = useState("");
  const [cigarettePerDay, setcigarettePerDay] = useState("");
  const [cigarettePerTime, setcigarettePerTime] = useState("");
  const [cigarettePackPrice, setcigarettePackPrice] = useState("");
  const dispatch = useDispatch();
  const store = useStore();
  const token = store.getState().authToken;

  const updateQuizeInfo = async (sigInfo, token) => {
    try {
      await axios
        .post(`/users/updateQuizInfo`, sigInfo, {
          headers: {
            Authorization: token,
          },
        })
        .then(dispatch(addUserQuizInfo(sigInfo)));
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(evt) {
    close();
    evt.preventDefault();
    const sigInfo = {
      smokeYears,
      cigarettePerDay,
      cigarettePerTime,
      cigarettePackPrice,
    };
    updateQuizeInfo(sigInfo, token);
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
              handleChange={({ target: { value } }) => setsmokeYears(value)}
              inputWidth={220}
            />
            <BasicInput
              name={"cigarettePerDay"}
              value={cigarettePerDay}
              placeholder={"0"}
              handleChange={({ target: { value } }) =>
                setcigarettePerDay(value)
              }
              inputWidth={220}
            />
            <BasicInput
              name={"cigarettePerTime"}
              value={cigarettePerTime}
              placeholder={"__min"}
              handleChange={({ target: { value } }) =>
                setcigarettePerTime(value)
              }
              inputWidth={220}
            />
            <BasicInput
              name={"cigarettePackPrice"}
              value={cigarettePackPrice}
              placeholder={"__.__grn"}
              handleChange={({ target: { value } }) =>
                setcigarettePackPrice(value)
              }
              inputWidth={220}
            />

            <button
              disabled={
                !smokeYears ||
                !cigarettePerDay ||
                !cigarettePerTime ||
                !cigarettePackPrice
              }
              type="submit"
              className={styles.modalBodyButton}
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default modalBackDropNoClose(InterviewModal);
