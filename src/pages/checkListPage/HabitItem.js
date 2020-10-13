import React, { useEffect, useState } from "react";
import { LinearProgressWithLabel } from "../../ui/ProgressBar";
import UpdateHabitModal from "../../components/Modals/UpdateHabitModal/UpdateHabitModal";
import { useDispatch, useSelector, useStore } from "react-redux";
import FindHabitById from "../../helpers/FindHabitById";
import moment from "moment";
import {
  calculateDoneCountHabits,
  calculateMissedCountHabits,
} from "../../helpers/counterProgressByHabit";
import { authToken } from "../../redux/selectors";
import { updateDateInUserHabit } from "../../redux/operations";
import Congratulations from "../../components/congratsModal/Congratulations";

export const HabitItem = ({
  id,
  habitMissedNumber,
  habitDoneNumber,
  habitTitle = "Утренняя зарядка 10-15 мин",
  linearProgressValue = 10,
}) => {
  const dispatch = useDispatch();
  const store = useStore();
  const [modalShow, setModalShow] = useState(false);
  const state = useSelector((state) => state);
  let userHabits = useSelector((state) => state.userHabits);

  const userHabitsDates = useSelector((state) => state.usersHabitsDates);
  const needElementColor = FindHabitById(userHabits, id).planningTime.split(
    " "
  )[11];

  const oneHabit = FindHabitById(userHabits, id);
  const [modalCongratulationShow, setModalCongratulationShow] = useState(false);

  const habitNumberCounter = document.getElementById(id);
  const buttonDoneActive = document.getElementById(`${id}done`);
  const buttonMissedActive = document.getElementById(`${id}missed`);

  const datanew = new Date();
  const newDataFormat = moment(datanew).format();
  const [habitName, setHabitName] = useState("");

  const closeCongratulationModal = () => {
    setModalCongratulationShow((prev) => !prev);
  };

  useEffect(() => {
    if (buttonMissedActive || buttonDoneActive) {
      buttonDoneActive.classList.remove("active");
      buttonMissedActive.classList.remove("active");
    }
  }, [state.currentDay]);

  const checkActiveBtn = (arrOfHabits) => {
    if (arrOfHabits.length > 0) {
      // находим даты конкретно это привычки
      const userHabitDatess = userHabitsDates.find((el) => el.habitId === id)
        .dates;

      // ищем индекс нужного елемента для записи в массив
      const indx = userHabitDatess.find((el, idx) =>
        el.split("T")[0] === newDataFormat.split("T")[0] ? el[idx] : ""
      );
      const indexOfDate = userHabitDatess.indexOf(indx);

      const trueOrFalse = arrOfHabits.find((el) => el._id === id).data[
        indexOfDate
      ];

      if (trueOrFalse) {
        const buttonDoneActive = document.getElementById(`${id}done`);
        const habitNumberCounter = document.getElementById(id);
        habitNumberCounter.classList.add("isVisible");
        buttonDoneActive.classList.add("active");
      } else if (!trueOrFalse) {
        const buttonMissedActive = document.getElementById(`${id}missed`);
        const habitNumberCounter = document.getElementById(id);
        habitNumberCounter.classList.add("isVisible");
        buttonMissedActive.classList.remove("active");
      }
    }
  };

  const [done, setDone] = useState(0);
  const [missed, setMissed] = useState(0);
  const [idFromState, setIdFromState] = useState("");

  useEffect(() => {
    const checkActiveBtn = (arrOfHabits) => {
      if (newDataFormat.split("T")[0] === state.currentDay) {
        if (arrOfHabits.length > 0) {
          // находим даты конкретно это привычки
          const userHabitDatess = userHabitsDates.find(
            (el) => el.habitId === id
          ).dates;
          // ищем индекс нужного елемента для записи в массив

          const indx = userHabitDatess.find((el, idx) =>
            el.split("T")[0] === newDataFormat.split("T")[0] ? el[idx] : ""
          );
          const indexOfDate = userHabitDatess.indexOf(indx);

          const trueOrFalse = arrOfHabits.find((el) => el._id === id).data[
            indexOfDate
          ];

          if (trueOrFalse) {
            if (trueOrFalse !== null) {
              const habitNumberCounter = document.getElementById(id);
              const buttonDoneActive = document.getElementById(`${id}done`);
              const buttonMissedActive = document.getElementById(`${id}missed`);

              habitNumberCounter.classList.add("isVisible");
              buttonMissedActive.classList.remove("active");
              buttonDoneActive.classList.add("active");
            }
          } else if (!trueOrFalse) {
            if (trueOrFalse !== null) {
              const habitNumberCounter = document.getElementById(id);
              const buttonMissedActive = document.getElementById(`${id}missed`);
              const buttonDoneActive = document.getElementById(`${id}done`);

              habitNumberCounter.classList.add("isVisible");
              buttonMissedActive.classList.add("active");
              buttonDoneActive.classList.remove("active");
            }
          }
        }

        setDone(calculateDoneCountHabits(arrOfHabits, id));
        setMissed(calculateMissedCountHabits(arrOfHabits, id));
      }
    };
    checkActiveBtn(userHabits);
  }, [
    checkActiveBtn,
    id,
    newDataFormat,
    state.currentDay,
    userHabits,
    userHabitsDates,
  ]);

  const close = () => {
    setModalShow((prev) => !prev);
  };

  useEffect(() => {
    setDone(calculateDoneCountHabits(userHabits, idFromState));
    setMissed(calculateMissedCountHabits(userHabits, idFromState));
  }, [idFromState, userHabits]);

  const handleClickHabitButtonDone = async (id) => {
    if (newDataFormat.split("T")[0] === state.currentDay) {
      habitNumberCounter.classList.add("isVisible");
      buttonMissedActive.classList.remove("active");
      buttonDoneActive.classList.add("active");

      setIdFromState(id);
      const userHabitDates = userHabitsDates.find((el) => el.habitId === id)
        .dates;

      // ищем индекс нужного елемента для записи в массив

      const indx = userHabitDates.find((el, idx) =>
        el.split("T")[0] === newDataFormat.split("T")[0] ? el[idx] : ""
      );

      const indexOfDate = userHabitDates.indexOf(indx);
      const userHabitData = userHabits.find((el) => el._id === id).data;

      userHabitData.every((el) => el === true) &&
        setModalCongratulationShow(true);

      userHabits.filter((el) => el._id === id && setHabitName(el.name));
      dispatch(
        updateDateInUserHabit("done", id, indexOfDate, authToken(state))
      );
      const userHabits = store.getState().userHabits;

      userHabits.filter((el) => el._id === id && setHabitName(el.name));

      const userHabitData = userHabits.find((el) => el._id === id).data;

      userHabitData.every((el) => el === true) &&
        setModalCongratulationShow(true);
      console.log(userHabitData);
    } else {
      buttonMissedActive.classList.remove("active");
    }
  };

  const handleClickHabitButtonMissed = (id) => {
    if (newDataFormat.split("T")[0] === state.currentDay) {
      habitNumberCounter.classList.add("isVisible");
      buttonMissedActive.classList.add("active");
      buttonDoneActive.classList.remove("active");
      setIdFromState(id);

      // находим даты конкретно это привычки
      const userHabitDates = userHabitsDates.find((el) => el.habitId === id)
        .dates;

      // ищем индекс нужного елемента для записи в массив

      const indx = userHabitDates.find((el, idx) =>
        el.split("T")[0] === newDataFormat.split("T")[0] ? el[idx] : ""
      );

      const indexOfDate = userHabitDates.indexOf(indx);

      dispatch(
        updateDateInUserHabit("missed", id, indexOfDate, authToken(state))
      );
    } else {
      buttonDoneActive.classList.remove("active");
    }
  };

  return (
    <>
      {modalCongratulationShow && (
        <Congratulations name={habitName} close={closeCongratulationModal} />
      )}

      <li className="habit-item" style={{ borderColor: `${needElementColor}` }}>
        <div className="habit-scale-container">
          <h3 className="habit-title">{habitTitle}</h3>
          <div className="habit-scale">
            <LinearProgressWithLabel value={linearProgressValue} />
            <button
              id={`${id}done`}
              className="btn done"
              onClick={() => handleClickHabitButtonDone(id)}
            ></button>
            <button
              id={`${id}missed`}
              className="btn missed"
              onClick={() => handleClickHabitButtonMissed(id)}
            ></button>
          </div>
          <p className="habit-scale-text">Прогресс привития привычки</p>

          <button
            className="btn-settings"
            onClick={() => setModalShow(true)}
          ></button>

          {modalShow && (
            <UpdateHabitModal
              close={close}
              idOfHabit={id}
              habitTitle={habitTitle}
              oneHabit={oneHabit}
            />
          )}
        </div>
        <div id={id} className="habit-number-counter">
          <div className="habit-done">
            <p>К-во выполненных дней</p>
            <span className="habit-done-number">{done}</span>
          </div>
          <div className="habit-missed">
            <p>К-во пропущенных дней</p>
            <span className="habit-missed-number">{missed}</span>
          </div>
        </div>
      </li>
    </>
  );
};
