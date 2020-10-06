import React from "react";
import { useSelector } from "react-redux";
import { userHabits, usersHabitsDates } from "../../redux/selectors";
import "./notification.css";
import { NotificationItem } from "./NotificationItem";
import { checkMessagesForNote } from "../../helpers/checkNotifications";

export const Notifiacation = () => {
  const state = useSelector((state) => state);
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);

  const notificationArr = checkMessagesForNote(habitsList, habitsInfo);

  return (
    <div className="notif-list-section">
      <div className="notif-header">
        <h2 className="notif-header-title">Уведомления</h2>
        <p className="notif-header-counter">{notificationArr.length} новых</p>
      </div>
      <div className="notif-content-wrapper">
        <ul className="notif-list">
          {notificationArr.length ? (
            notificationArr.map((elem, idx) => <NotificationItem key={idx} text={elem} />)
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
