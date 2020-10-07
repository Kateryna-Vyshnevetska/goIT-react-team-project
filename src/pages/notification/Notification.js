import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationType,
  userHabits,
  usersHabitsDates,
} from "../../redux/selectors";
import "./notification.css";
import "../../components/RightSideBar/Calendar.module.css";
import { NotificationItem } from "./NotificationItem";
import { checkMessagesForNote } from "../../helpers/checkNotifications";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { countNotesAction } from "../../redux/notificationPage/notificationAction";
import FindHabitById from "../../helpers/FindHabitById";

export const Notifiacation = () => {
  const state = useSelector((state) => state);
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);
  const dispatch = useDispatch();
  const habits = userHabits(state);
  const arrOfhabitDone = [];
  const notificationArr = checkMessagesForNote(
    habitsList,
    habitsInfo,
    dispatch
  );

  useEffect(() => {
    dispatch(countNotesAction([]));
    localStorage.setItem("habitsId", JSON.stringify(arrOfhabitDone));
  }, []);

  const status = notificationType(state);
  notificationArr.forEach((el) =>
    arrOfhabitDone.push(FindHabitById(habits, el.id))
  );
  //
  // useEffect(() => {
  //   console.log("doef");
  //   const dataFromStorage = localStorage.getItem("habitsId");
  //   const habitsStorage = JSON.parse(dataFromStorage);
  //   if (habitsStorage) {
  //     console.log(habitsStorage);
  //   }
  // }, []);

  // const click = (idx) => {
  //   notificationArr.splice(idx, 1);
  //   dispatch(countNotesAction(notificationArr));
  // };

  // useEffect(() => {
  //   console.log("effect");
  //   notificationArr = checkMessagesForNote(habitsList, habitsInfo);
  //   console.log(notificationArr);
  // }, [notificationArr]);

  return (
    <div className="notif-list-section">
      <div className="notif-header">
        <h2 className="notif-header-title">Уведомления</h2>
        <p className="notif-header-counter">{status.length} новых</p>
      </div>
      <div className="notif-content-wrapper">
        <ul className="notif-list">
          <TransitionGroup>
            {arrOfhabitDone.length ? (
              arrOfhabitDone.map((elem, idx) => (
                <CSSTransition key={idx} timeout={1000} classNames="list-fade">
                  <NotificationItem
                    key={idx}
                    id={idx}
                    name={elem.name}
                    text={elem}
                    // onClick={click}
                  />
                </CSSTransition>
              ))
            ) : (
              <li>
                <p className="notificationText">У Вас нет новых уведомлений</p>
              </li>
            )}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};
