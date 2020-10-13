import React, { useEffect, useState } from "react";
import { BasicInput } from "../../BasicInput/BasicInput";
import DateInput from "../../BasicInput/DateInput/DateInput";
import "../../../index.css";
import { useForm } from "react-hook-form";
import style from "./CustomHabitModal.module.css";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import { useDispatch, useSelector } from "react-redux";
import { createHabitAndGetAllHabits } from "../../../redux/operations";
import { authToken } from "../../../redux/selectors";
import { getRandomColor } from "../../../helpers/getRandomColor";
import { useHistory } from "react-router";

function CustomHabitModal({ close, textOfHabit, setModalShow }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const history = useHistory();
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  useEffect(() => {
    textOfHabit && setName(textOfHabit);
  }, [textOfHabit]);

  const handleChangeInput = (date) => {
    setDate(date);
  };

  const goBack = () => {
    setModalShow && setModalShow(true);
    close();
  };

  const onSubmit = (data) => {
    data.planningTime = `${date} ${data.time} ${getRandomColor()}`;
    delete data.time;
    dispatch(createHabitAndGetAllHabits(data, authToken(state)));
    close();
    history.push("/make-it-habit/check-list");
  };

  return (
    <>
      <div className={style.wrapper}>
        <h3 className={style.title}>Настройте привычку под себя.</h3>
        <p className={style.text}>Так Вам будет удобнее достичь своей цели</p>

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={style.errorMessage}>
            {errors.time || errors.name || errors.date || errors.select
              ? "Все поля обязательны"
              : null}
          </p>
          <div className={style.row}>
            <BasicInput
              register={register({
                minLength: 6,
                required: true,
              })}
              forLabel={"name-of-habit"}
              id={"name-of-habit"}
              labelText={"Название *"}
              name={"name"}
              labelWidth={"200px"}
              inputWidth={"400px"}
              value={textOfHabit}
              readOnlyWay="readOnly"
            />
          </div>
          <DateInput
            forLabel={"date"}
            id={"date"}
            labelText={"Дата начала *"}
            name={"date"}
            labelWidth={"200px"}
            inputWidth={"400px"}
            type={"date"}
            marginBottom={"20px"}
            handleChangeDate={handleChangeInput}
          />
          <div className={style.row}>
            <label className={style.label} htmlFor="time">
              Время *
            </label>
            <input
              ref={register({
                required: true,
              })}
              name="time"
              className={style.input}
              id="time"
              type="time"
            />
          </div>
          <div className={style.row}>
            <label className={style.label} htmlFor="repeat">
              Повторение *
            </label>
            <select
              className={style.select}
              name="iteration"
              ref={register({
                required: true,
              })}
            >
              <option aria-label="None" value="" />
              <option value="1">Ежедневно</option>
              <option value="2">Раз в 2 дня</option>
              <option value="3">ПН, СР, ПТ</option>
              <option value="4">ВТ, ЧТ, СБ</option>
              <option value="5">По будням</option>
            </select>
          </div>
          <button disabled className={style.btnDelete}>
            <span className={style.btnDeleteIcon}></span> Удалить привычку
          </button>
          <div className={style.actionBtnContainer}>
            <button onClick={() => goBack()} className={style.btnSecondary}>
              Отмена
            </button>
            <button type="Submit" className={style.btnMain}>
              Сохранить
            </button>
          </div>
        </form>
        <button
          onClick={() => close()}
          className={style.modalBodyButtonclose}
        ></button>
      </div>
    </>
  );
}

export default modalBackDrop(CustomHabitModal);
