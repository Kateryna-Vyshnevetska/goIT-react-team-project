import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import axios from "axios";
import { BasicInput } from "../BasicInput/BasicInput";
import CustomButton from "../CustomButton/CustomButton";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import styles from "./DailyResultModal.module.css";
import { addUserCigarettes } from "../../redux/cigarettes/cigarettesActions";

function DailyResultModal({ close }) {
  const [sigCount, setsigCount] = useState("");
  const dispatch = useDispatch();
  const store = useStore();
  const token = store.getState().authToken;
  const data = store.getState().userCigarettes.data;

  const updateCigarettesInfo = async (sigCount) => {
    try {
      await axios
        .post(
          `/users/updateCigarettes`,
          {
            startedAt: "2020-09-14T09:11:03.448Z",
            data: [...data, sigCount],
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then(() => {
          dispatch(
            addUserCigarettes({
              startedAt: "2020-09-14T09:11:03.448Z",
              data: [...data, sigCount],
            })
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(evt) {
    close();
    evt.preventDefault();
    const sigInfo = sigCount;
    updateCigarettesInfo(sigCount);
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