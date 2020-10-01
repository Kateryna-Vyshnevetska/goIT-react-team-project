import React from "react";
import style from "./CustomHabitModal.module.css";
import { BasicInput } from "../../BasicInput/BasicInput";

function CustomHabitModal() {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Настройте привычку под себя</h3>
      <p className={style.text}>так Вам будет удобнее достичь своей цели</p>
      <form className={style.form}>
        <div className={style.row}>
          <BasicInput
            forLabel={"name-of-habit"}
            id={"name-of-habit"}
            labelText={"Название"}
            name={"name-of-habit"}
            labelWidth={"200px"}
            inputWidth={"400px"}
          />
        </div>

        <div className={style.row}>
          <label className={style.label} for="date-of-start">
            Дата старта
          </label>
          <input className={style.input} id="date-of-start" type="date" />
        </div>

        <div className={style.row}>
          <label className={style.label} for="date">
            Время
          </label>
          <input className={style.input} id="date" type="time" />
        </div>

        <div className={style.row}>
          <label className={style.label} for="repeat">
            Повторение
          </label>
          <input className={style.input} id="repeat" />
        </div>

        <button className={style.btnDelete}>
          <span className={style.btnDeleteIcon}></span> Удалить привычку
        </button>

        <div className={style.actionBtnContainer}>
          <button>Отмена</button>
          <button>Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default CustomHabitModal;
