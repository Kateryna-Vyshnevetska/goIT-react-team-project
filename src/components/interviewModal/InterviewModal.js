import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import { updateQuizeInfo } from "../../redux/operations";
import { BasicInput } from "../BasicInput/BasicInput";
import modalBackDropNoClose from "../modalBackDrop/ModalBackDropNoClose";
import styles from "./InterviewModal.module.css";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

function InterviewModal() {
  const schema = yup.object().shape({
    smokeYears: yup.number().positive().integer().required(),
    cigarettePerDay: yup.number().positive().integer().required(),
    cigarettePerTime: yup.number().positive().integer().required(),
    cigarettePackPrice: yup.string().required(),
  });
  const [smokeYears, setsmokeYears] = useState("");
  const [cigarettePerDay, setcigarettePerDay] = useState("");
  const [cigarettePerTime, setcigarettePerTime] = useState("");
  const [cigarettePackPrice, setcigarettePackPrice] = useState("");

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("/make-it-habit/profile");
    dispatch(updateQuizeInfo(data, token));
  };
  const dispatch = useDispatch();
  const store = useStore();
  const token = store.getState().authToken;
  const history = useHistory();

  function handleInputcigarettePerDay(value) {
    const valueIn = value.replace(/\D/, "");
    setcigarettePerDay(valueIn);
  }

  function handleInputsmokeYears(value) {
    const valueIn = value.replace(/\D/, "");
    setsmokeYears(valueIn);
  }

  function handleInputcigarettePerTime(value) {
    const valueIn = value.replace(/\D/, "");
    setcigarettePerTime(valueIn);
  }

  function handleInputcigarettePackPrice(value) {
    const valueIn = value.replace(/[^0-9.]+/g, "");
    setcigarettePackPrice(valueIn);
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
                Сколько времени у Вас уходит на 1 сигарету?
              </h2>
            </li>
            <li className={styles.modalBodyItem}>
              <h2 className={styles.modalBodyText}>
                Сколько стоит одна пачка сигарет?
              </h2>
            </li>
          </ul>
          <form
            className={styles.modalBodyForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"smokeYears"}
              placeholder={"0"}
              inputWidth={220}
              maxLength={"2"}
              value={smokeYears}
              handleChange={({ target: { value } }) =>
                handleInputsmokeYears(value)
              }
            />
            <p className={styles.errMesage}>
              {errors.smokeYears && "Введите число"}
            </p>
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"cigarettePerDay"}
              placeholder={"0"}
              inputWidth={220}
              maxLength={"2"}
              value={cigarettePerDay}
              handleChange={({ target: { value } }) =>
                handleInputcigarettePerDay(value)
              }
            />
            <p className={styles.errMesage}>
              {errors.cigarettePerDay && "Введите число"}
            </p>
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"cigarettePerTime"}
              placeholder={"__min"}
              inputWidth={220}
              maxLength={"2"}
              value={cigarettePerTime}
              handleChange={({ target: { value } }) =>
                handleInputcigarettePerTime(value)
              }
            />
            <p className={styles.errMesage}>
              {errors.cigarettePerTime && "Введите число"}
            </p>
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"cigarettePackPrice"}
              placeholder={"__.__grn"}
              inputWidth={220}
              value={cigarettePackPrice}
              handleChange={({ target: { value } }) =>
                handleInputcigarettePackPrice(value)
              }
            />
            <p className={styles.errMesage}>
              {errors.cigarettePackPrice && "Введите число"}
            </p>
            <button type="submit" className={styles.modalBodyButton}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default modalBackDropNoClose(InterviewModal);
