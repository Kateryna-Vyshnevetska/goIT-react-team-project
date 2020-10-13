import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { addUserCigarettes } from "../../redux/cigarettes/cigarettesActions";
import { updateCigarettesInfo } from "../../requests/requests";
import modalBackDropNoClose from "../modalBackDrop/ModalBackDropNoClose";
import styles from "./CheckPrevDaySigs.module.css";
import { BasicInput } from "../BasicInput/BasicInput";

import moment from "moment";

function CheckPrevDaySigs({ close }) {
  const dispatch = useDispatch();
  const store = useStore();
  const token = store.getState().authToken;
  const data = store.getState().userCigarettes.data;
  const mainHabitDateArr = store.getState().mainHabitDates;
  const startedAt = store.getState().userCigarettes.startedAt;
  const currentDay = store.getState().currentDay;
  const [sigCount, setsigCount] = useState("");

  const didntSmoked = async () => {
    let arr = data.slice();
    const nowTime = new Date();
    const nowTimeMoment = moment(nowTime).format("MMM Do YY");
    Object.values(mainHabitDateArr).forEach((element) => {
      const mainDatesMoment = moment(element).format("MMM Do YY");
      if (mainDatesMoment.includes(nowTimeMoment)) {
        let idx = mainHabitDateArr.indexOf(element);
        if (arr[idx - 1] === null) {
          arr[idx - 1] = 0;
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

    await close();
  };
  const smoked = async () => {
    let arr = data.slice();
    const nowTime = new Date();
    const nowTimeMoment = moment(nowTime).format("MMM Do YY");
    Object.values(mainHabitDateArr).forEach((element) => {
      const mainDatesMoment = moment(element).format("MMM Do YY");
      if (mainDatesMoment.includes(nowTimeMoment)) {
        let idx = mainHabitDateArr.indexOf(element);
        if (arr[idx - 1] === null) {
          arr[idx - 1] = Number(sigCount);
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
    await close();
  };

  function handleInput(value) {
    const valueIn = value.replace(/\D/, "");
    setsigCount(valueIn);
  }

  return (
    <>
      <div className={styles.modalHead}>
        <h1 className={styles.modalTitle}>Вы вчера не добавили синареты</h1>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyItem}>
            <p className={styles.modalText}>Пожалуйста, сделайте выбор</p>

            <button
              className={styles.modalBodyButtonChose}
              onClick={() => didntSmoked()}
            >
              Я не курил вчера
            </button>
          </div>
          <p className={styles.modalText}>Или</p>

          <div className={styles.modalBodyItem}>
            <form className={styles.modalBodyForm} onSubmit={smoked}>
              <BasicInput
                name={"sigCount"}
                value={sigCount}
                placeholder={"__шт"}
                handleChange={({ target: { value } }) => handleInput(value)}
                inputWidth={220}
                maxLength={"2"}
              />
              <div className={styles.modalButtons}>
                <button
                  type="submit"
                  disabled={!sigCount}
                  className={styles.modalBodyButtonSubmit}
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default modalBackDropNoClose(CheckPrevDaySigs);
