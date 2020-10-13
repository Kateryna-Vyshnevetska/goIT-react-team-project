import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import moment from "moment";
import { BasicInput } from "../BasicInput/BasicInput";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./DailyResultModal.module.css";
import { addUserCigarettes } from "../../redux/cigarettes/cigarettesActions";
import { updateCigarettesInfo } from "../../requests/requests";
function DailyResultModal({ close }) {
  const [sigCount, setsigCount] = useState("");
  const dispatch = useDispatch();
  const store = useStore();
  const token = store.getState().authToken;
  const data = store.getState().userCigarettes.data;
  const dataDate = new Date(store.getState().userCigarettes.startedAt);
  const mainHabitDateArr = store.getState().mainHabitDates;
  const startedAt = store.getState().userCigarettes.startedAt;
  const currentDay = store.getState().currentDay;

  function updateDates(sigCount) {
    let arr = data.slice();
    const nowTime = new Date();
    const nowTimeMoment = moment(nowTime).format("MMM Do YY");
    Object.values(mainHabitDateArr).forEach((element) => {
      const mainDatesMoment = moment(element).format("MMM Do YY");
      if (mainDatesMoment.includes(nowTimeMoment)) {
        let idx = mainHabitDateArr.indexOf(element);
        if (arr[idx] !== null) {
          arr[idx] = Number(arr[idx]) + Number(sigCount);
        } else {
          arr[idx] = Number(sigCount);
        }

        updateCigarettesInfo(arr, startedAt, token);
        dispatch(
          addUserCigarettes({
            startedAt: startedAt,
            data: arr,
          })
        );
        return arr;
      }
    });
  }

  function handleSubmit(evt) {
    close();
    evt.preventDefault();
    updateDates(sigCount);
  }
  return (
    <>
      <div className={styles.modalHead}>
        <h1 className={styles.modalTitle}>
          Сколько сигарет за сегодня Вы выкурили?
        </h1>
        <p className={styles.modalText}>
          Давайте вместе постараемся свести это число к нулю.
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
              placeholder={"__шт"}
              handleChange={({ target: { value } }) => setsigCount(value)}
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
                disabled={!sigCount}
                className={styles.modalBodyButtonSubmit}
              >
                Сохранить
              </button>
              <button
                onClick={() => close()}
                className={styles.modalBodyButtonclose}
              ></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default modalBackDrop(DailyResultModal);
