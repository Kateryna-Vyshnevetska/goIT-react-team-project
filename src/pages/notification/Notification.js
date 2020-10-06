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
  // console.log(state);

  const dateToday = new Date();
  const dateNow = moment(dateToday).format().substring(0, 10);
  const date = "2020-11-11";

  const completedHabits = habitsList.filter(
    (habit) => habit.data.every((elem) => elem === true || elem === null) && habit
  );

  console.log(completedHabits);

  // const findCompletedHabits = (habits) =>
  //   habits.map(
  //     (habit) =>
  //       habit.data.every((elem) => elem === true || elem === false) &&
  //       completedHabits.push(habit)
  //   );

  // findCompletedHabits(habitsList);

  completedHabits.map((item) =>
    item.data.every((el) => el === true)
      ? userSuccessCompletedHabitsID.push(item["_id"])
      : userCompletedHabitsID.push(item["_id"])
  );

  // console.log(userSuccessCompletedHabitsID, userCompletedHabitsID);

  // const completedHabitsID = (completed) =>
  //   completed.map((habit) => habit._id).filter((elem) => typeof elem === "string");

  // const yruyr = completedHabitsID(userCompletedHabits);

  // const onlyCompletedHabitsID = (habits, done, undone) =>
  //   habits
  //     .map(
  //       (habit) =>
  //         habit.data.every((elem) => elem === done || elem === undone) && habit._id
  //     )
  //     .filter((elem) => typeof elem === "string");

  // console.log(completedHabitsID(habitsList, null));

  const arrayTodayCompletedHabitsID = habitsInfo
    .filter((habit) => habit.dates[habit.dates.length - 1].split("T")[0] === dateNow)
    .map((habit) => habit.habitId);

  // console.log(arrayTodayCompletedHabitsID);

  // const indexOfUserDoneHabits = habitsList
  //   .map((habit) => habit.data.every((elem) => elem === true || elem === false))
  //   .map((elem, idx) => elem === true && idx);

  // const userCompletedHabitsID = completedHabitsID(habitsList, true, null);
  // const userSuccessCompletedHabitsID = completedHabitsID(habitsList, null);
  // const onlyCompleted = userCompletedHabitsID.filter((key) => key);

  const setNotificationArray = (habitsArray1, habitsArray2) =>
    arrayTodayCompletedHabitsID.map((key) => {
      habitsArray1.map((id) => id === key && notificationArr.push("success"));
      habitsArray2.map((id) => id === key && notificationArr.push("completed"));
    });

  setNotificationArray(userSuccessCompletedHabitsID, userCompletedHabitsID);

  // arrayTodayCompletedHabitsID.map((key) =>
  //   userSuccessCompletedHabitsID.map((id) =>
  //     id === key
  //       ? notificationArr.push("success")
  //       : userCompletedHabitsID.map(
  //           (id) => id === key && notificationArr.push("completed")
  //         )
  //   )
  // );
  // console.log("userSuccessCompletedHabitsID", userSuccessCompletedHabitsID);
  // console.log("userCompletedHabitsID", userCompletedHabitsID);
  // console.log("arrayTodayCompletedHabitsID", arrayTodayCompletedHabitsID);

  // console.log("notificationArr", notificationArr);

  // if (arrayTodayCompletedHabitsID) {
  //   if (userSuccessCompletedHabitsID) {
  //     notificationArr.push("success");
  //   } else if (userCompletedHabitsID) {
  //     notificationArr.push("completed");
  //   }
  // }

  // isUserHaveDoneHabits ? isUserHaveSuccessDoneHabits : null;

  // .map((elem, idx) => {
  //         // console.log(elem);
  //         if (elem === true) {
  //           return idx;
  //         }
  // })

  // console.log(indexOfUsersDoneHabits.map((elem, idx) => elem === false && idx));

  // myHabit.includes(true) ? console.log("yes") : console.log("no");

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
