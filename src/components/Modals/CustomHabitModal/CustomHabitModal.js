import React, { useState } from "react";
import { BasicInput } from "../../BasicInput/BasicInput";
import DateInput from "../../BasicInput/DateInput/DateInput";
import "../../../index.css";
import style from "./CustomHabitModal.module.css";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import { useDispatch, useSelector } from "react-redux";
import { createHabitAndGetAllHabits } from "../../../redux/operations";
import { authToken } from "../../../redux/selectors";
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
  const newHabit = {};
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [date, setDate] = useState(new Date());

  const handleChangeInput = (date) => {
    setDate(date);
    console.log(date);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    newHabit.iteration = "1 per day";
    dispatch(createHabitAndGetAllHabits(newHabit, authToken(state)));
    close();
  };

  const handleChange = ({ target: { name, value } }) => {
    newHabit.name = value;
  };

  return (
    <>
      {/* < style > { birthdayStyle }</style> */}
      <div className={style.wrapper}>
        <h3 className={style.title}>Настройте привычку под себя</h3>
        <p className={style.text}>так Вам будет удобнее достичь своей цели</p>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.row}>
            <BasicInput
              forLabel={"name-of-habit"}
              id={"name-of-habit"}
              labelText={"Название *"}
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
            handleChangeDate={handleChangeInput}
          />
          <div className={style.row}>
            <label className={style.label} for="date">
              Время *
            </label>
            <input
              className={style.input}
              id="date"
              type="time"
              onChange={(ev) => {
                newHabit.planningTime = ev.target.value;
              }}
            />
          </div>
          <div className={style.row}>
            <label className={style.label} for="repeat">
              Повторение *
            </label>
            <select>
              <option value="once">1 per day</option>
            </select>
          </div>
          <button className={style.btnDelete}>
            <span className={style.btnDeleteIcon}></span> Удалить привычку
          </button>
          <div className={style.actionBtnContainer}>
            <button onClick={() => close()} className={style.btnSecondary}>
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
