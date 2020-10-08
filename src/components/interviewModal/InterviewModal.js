import React from "react";
import { useDispatch, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import { updateQuizeInfo } from "../../redux/operations";
import { BasicInput } from "../BasicInput/BasicInput";
import modalBackDropNoClose from "../modalBackDrop/ModalBackDropNoClose";
import styles from "./InterviewModal.module.css";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

function InterviewModal({ close }) {
  const schema = yup.object().shape({
    smokeYears: yup.number().positive().integer().required(),
    cigarettePerDay: yup.number().positive().integer().required(),
    cigarettePerTime: yup.number().positive().integer().required(),
    cigarettePackPrice: yup.number().positive().integer().required(),
  });

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
            />
            <p>{errors.smokeYears && "Это должно быть положительное число"}</p>
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"cigarettePerDay"}
              placeholder={"0"}
              inputWidth={220}
            />
            <p>
              {errors.cigarettePerDay && "Это должно быть положительное число"}
            </p>
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"cigarettePerTime"}
              placeholder={"__min"}
              inputWidth={220}
            />
            <p>
              {errors.cigarettePerTime && "Это должно быть положительное число"}
            </p>
            <BasicInput
              register={register({
                min: 1,
                required: true,
              })}
              name={"cigarettePackPrice"}
              placeholder={"__.__grn"}
              inputWidth={220}
            />
            <p>
              {errors.cigarettePackPrice &&
                "Это должно быть положительное число"}
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
