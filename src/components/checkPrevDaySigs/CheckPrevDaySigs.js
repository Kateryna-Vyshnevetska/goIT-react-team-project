import React from "react";
import { useDispatch, useStore } from "react-redux";
import { addUserCigarettes } from "../../redux/cigarettes/cigarettesActions";
import { updateCigarettesInfo } from "../../requests/requests";
import modalBackDropNoClose from "../modalBackDrop/ModalBackDropNoClose";
import styles from "./CheckPrevDaySigs.module.css";
import moment from "moment";

function CheckPrevDaySigs({ close }) {
  const dispatch = useDispatch();
  const store = useStore();
  const token = store.getState().authToken;
  const data = store.getState().userCigarettes.data;
  const mainHabitDateArr = store.getState().mainHabitDates;
  const startedAt = store.getState().userCigarettes.startedAt;
  const currentDay = store.getState().currentDay;

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
          arr[idx - 1] = false;
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
            <button
              className={styles.modalBodyButtonAdd}
              onClick={() => smoked()}
            >
              Я курил вчера но забыл
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default modalBackDropNoClose(CheckPrevDaySigs);
