import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriptionLevel } from "../../../redux/operations";
import { authToken } from "../../../redux/selectors";
import { subscriptionAction } from "../../../redux/subscription/subscriptionAction";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import styles from "./subscriptionModal.module.css";
const SubscriptionModal = ({ close }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const startTimer = () => {
    localStorage.setItem("subscription", JSON.stringify(true));
    dispatch(updateSubscriptionLevel({ plan: "Ultra" }, authToken(state)));
    dispatch(
      subscriptionAction({
        plan: "Ultra",
      })
    );
    close();
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Поздравляем с первой привычкой</h1>
      <p className={styles.text}>
        В качестве подарка от создателей сайта, дарим Вам 14 дней пробного
        периода с подпиской "ULTRA". По окончанию пробного периода Вы можете
        продлить подписку в личном кабинете
      </p>
      <button onClick={startTimer} className={styles.btnStart}>
        Начать
      </button>
    </div>
  );
};
export default modalBackDrop(SubscriptionModal);
