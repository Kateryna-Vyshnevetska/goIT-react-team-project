import React, { useEffect, useState } from "react";
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

  const arrOfhabitDone = [];
  const notificationArr = checkMessagesForNote(habitsList, habitsInfo);

  useEffect(() => {
    dispatch(countNotesAction([]));
    localStorage.setItem("habitsId", JSON.stringify(arrOfhabitDone));
  }, []);

  const status = notificationType(state);
  notificationArr.forEach((el) =>
    arrOfhabitDone.push(FindHabitById(habitsList, el.id))
  );

  return (
    <div className="notif-list-section">
      <div className="notif-header">
        <h2 className="notif-header-title">Уведомления</h2>
        <p className="notif-header-counter">{status.length} новых</p>
      </div>
      <div className="notif-content-wrapper">
        <ul className="notif-list">
          {arrOfhabitDone.length ? (
            arrOfhabitDone.map((elem, idx) => (
              <NotificationItem
                key={idx}
                id={idx}
                name={elem.name}
                text={elem}
              />
            ))
          ) : (
            <li>
              <p className="notificationText">У Вас нет новых уведомлений</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
