import React from "react";
import { useSelector } from "react-redux";
import { userHabits, usersHabitsDates } from "../../redux/selectors";
import moment from "moment";
import "./notification.css";
import { NotificationItem } from "./NotificationItem";

export const Notifiacation = () => {
  const state = useSelector((state) => state);
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);
  const userCompletedHabitsID = [];
  const userSuccessCompletedHabitsID = [];
  const notificationArr = [];

  const dateToday = new Date();
  const dateNow = moment(dateToday).format().substring(0, 10);

  const completedHabits = habitsList.filter(
    (habit) => habit.data.every((elem) => elem === true || elem === null) && habit
  );

  completedHabits.map((item) =>
    item.data.every((el) => el === true)
      ? userSuccessCompletedHabitsID.push(item["_id"])
      : userCompletedHabitsID.push(item["_id"])
  );

  const arrayTodayCompletedHabitsID = habitsInfo
    .filter((habit) => habit.dates[habit.dates.length - 1].split("T")[0] === dateNow)
    .map((habit) => habit.habitId);

  const setNotificationArray = (habitsArray1, habitsArray2) =>
    arrayTodayCompletedHabitsID.map((key) => {
      habitsArray1.map((id) => id === key && notificationArr.push("success"));
      habitsArray2.map((id) => id === key && notificationArr.push("completed"));
    });

  setNotificationArray(userSuccessCompletedHabitsID, userCompletedHabitsID);

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
