import React, { useEffect, useState } from "react";
import "./checkListPage.css";
import { useDispatch, useSelector } from "react-redux";
import { HabitItem } from "../../pages/checkListPage/HabitItem";
import DailyResultModal from "../../components/dailyResultModal/DailyResultModal";
// import FindHabitById from "../../helpers/FindHabitById";
// import moment from "moment";

// import { updateDateInUserHabit } from "../../redux/operations";
// import { authToken } from "../../redux/selectors";
// import {
//   calculateDoneCountHabits,
//   calculateMissedCountHabits,
// } from "../../helpers/counterProgressByHabit";
import { congratulationModal } from "../../redux/congratulationModal/CongratulationModalAction";
import SubscriptionModal from "../../components/habitChoiceModal/subscriptionModal/SubscriptionModal";
import CountDown from "../../ui/CountDown";

export function CheckListPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const dateNow = useSelector((state) => state.currentDay);
  const [modalShow, setModalShow] = useState(false);
  const userHabits = useSelector((state) => state.userHabits);
  const userHabitsDates = useSelector((state) => state.usersHabitsDates);
  const congratulationMod = useSelector(
    (state) => state.congratulationModalForUser
  );

  const [open, getOpen] = useState(false);

  let data = localStorage.getItem("subscription");
  useEffect(() => {
    data = localStorage.getItem("subscription");
    const dataFromStorage = JSON.parse(data);
    if (dataFromStorage === null || dataFromStorage !== true) {
      localStorage.setItem("subscription", JSON.stringify(false));
    } else {
      getOpen(true);
    }
  }, [data]);
  useEffect(() => {
    const data = localStorage.getItem("subscription");
    const dataFromStorage = JSON.parse(data);
    if (userHabits.length === 1) {
      if (dataFromStorage === false) {
        setTimeout(() => {
          dispatch(congratulationModal(true));
        }, 1000);
      }
    }
  }, [userHabits]);

  const arr = [];

  userHabits.map((habits) =>
    userHabitsDates.map(
      (dates) =>
        habits._id === dates.habitId &&
        dates.dates.map(
          (date) => dateNow === date.split("T")[0] && arr.push(habits)
        )
    )
  );

  const close = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <div className="check-list-section">
      {congratulationMod && (
        <SubscriptionModal close={() => dispatch(congratulationModal(false))} />
      )}
      <div className="habit-container">
        <div className="habit-header">
          <h2 className="habit-header-title">Чек-лист привычек</h2>
          {open && <CountDown />}
          <button
            onClick={() => setModalShow(true)}
            className="habit-header-button"
          >
            + Сигареты за сегодня
          </button>
          {modalShow && <DailyResultModal close={close} />}
        </div>
        <ul className="habit-list">
          {arr.length ? (
            arr.map((el) => (
              <HabitItem
                // clickDone={handleClickHabitButtonDone}
                // clickMissed={handleClickHabitButtonMissed}
                key={el._id}
                id={el._id}
                habitTitle={el.name}
                linearProgressValue={el.efficiency}
                // habitMissedNumber={missed}
                // habitDoneNumber={done}
              />
            ))
          ) : (
            <p className="notificationText">
              Вы пока не выбрали привычки, над которыми хотите работать
            </p>
          )}

          {/* {arr.map((el) => (
            <HabitItem
              // clickDone={handleClickHabitButtonDone}
              // clickMissed={handleClickHabitButtonMissed}
              key={el._id}
              id={el._id}
              habitTitle={el.name}
              linearProgressValue={el.efficiency}
              // habitMissedNumber={missed}
              // habitDoneNumber={done}
            />
          ))} */}
        </ul>
      </div>
    </div>
  );
}
