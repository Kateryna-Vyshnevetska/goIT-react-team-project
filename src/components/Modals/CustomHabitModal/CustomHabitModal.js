import React, { useEffect, useState } from "react";
import { BasicInput } from "../../BasicInput/BasicInput";
import DateInput from "../../BasicInput/DateInput/DateInput";
import "../../../index.css";
import style from "./CustomHabitModal.module.css";
import modalBackDrop from "../../modalBackDrop/ModalBackDrop";
import { useDispatch, useSelector } from "react-redux";
import { createHabitAndGetAllHabits } from "../../../redux/operations";
import { authToken } from "../../../redux/selectors";
import { getRandomColor } from "../../../helpers/CheckListPage";


function CustomHabitModal({ close, textOfHabit }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [iteration, setIteration] = useState("");
  const [planningTime, setPlanningTime] = useState("");


  useEffect(() => {
    if (textOfHabit) {
     setName(textOfHabit);
   }
  }, [])

  const handleChangeInput = (date) => {
    setDate(date.toLocaleDateString("en-GB"));
    console.log(date);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      createHabitAndGetAllHabits(
        {
          name: name,
          planningTime: `${date} ${planningTime} ${getRandomColor()}`,
          iteration: iteration,
        },
        authToken(state)
      )
    );
    close();
  };

  const handleChange = ({ target: { name, value } }) => {
    setName(value);
  };

  return (
    <>
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
              handleChange={handleChange}
              value={textOfHabit}
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
            <label className={style.label} htmlFor="date">
              Время *
            </label>
            <input
              className={style.input}
              id="date"
              type="time"
              onChange={(ev) => {
                setPlanningTime(ev.target.value);
              }}
            />
          </div>
          <div className={style.row}>
            <label className={style.label} htmlFor="repeat">
              Повторение *
            </label>
            <select
              onChange={({ target: { value } }) => {
                setIteration(value);
              }}
            >
              <option></option>
              <option value="1">Ежедневно</option>
              <option value="2">Раз в 2 дня</option>
              <option value="3">ПН, СР, ПТ</option>
              <option value="4">ВТ, ЧТ, СБ</option>
            </select>
          </div>
          <button disabled className={style.btnDelete}>
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
