import React from "react";
import { BasicInput } from "../../BasicInput/BasicInput";
import DateInput from "../../BasicInput/DateInput/DateInput";
import "../../../index.css";
import style from "./CustomHabitModal.module.css";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
// const birthdayStyle = `
//   .react-datepicker__month-container {
// 	font-family: Montserrat;
// font-style: normal;
// font-weight: normal;
// font-size: 14px;
// line-height: 17px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #181C27;

//   }

// `;

function CustomHabitModal({ close }) {
  return (
    <>
      {/* < style > { birthdayStyle }</style> */}
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
          {/* <div className={style.row}>
          <label className={style.label} for="date-of-start">
            Дата старта
          </label>
          <input className={style.input} id="date-of-start" type="date" />
        </div> */}
          <DateInput
            forLabel={"date"}
            id={"date"}
            labelText={"Дата начала"}
            name={"date"}
            labelWidth={"200px"}
            inputWidth={"400px"}
            type={"date"}
            marginBottom={"20px"}
          />
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
            <button onClick={() => close()} className={style.btnSecondary}>
              Отмена
            </button>
            <button className={style.btnMain}>Сохранить</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default modalBackDrop(CustomHabitModal);
