import React, { useEffect, useState } from "react";
import { BasicInput } from "../../BasicInput/BasicInput";
import DateInput from "../../BasicInput/DateInput/DateInput";
import "../../../index.css";
import style from "./UpdateHabitModal.module.css";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import { useDispatch, useSelector } from "react-redux";
import { createHabitAndGetAllHabits } from "../../../redux/operations";
import { authToken } from "../../../redux/selectors";
import FindHabitById from "../../../helpers/FindHabitById";
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

function UpdateHabitModal({ close, idOfHabit }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const newHabit = {};

  const [habit, setHabit] = useState({
    name: "",
    planningTime: { time: "08:08" },
  });

  useEffect(() => {
    const objectHabit = FindHabitById(state.userHabits, idOfHabit);

    setHabit(objectHabit);
  }, [idOfHabit, state.userHabits]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    newHabit.iteration = "1 per day";
    console.log(newHabit);
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
        <h3 className={style.title}>Update привычку под себя</h3>
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
              handleChange={handleChange}
              placeholder={habit.name}
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
              Время *
            </label>
            <input
              className={style.input}
              id="date"
              type="time"
              value={habit.planningTime.time}
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
      </div>
    </>
  );
}

export default modalBackDrop(UpdateHabitModal);
