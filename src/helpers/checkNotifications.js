import moment from "moment";
import { idNot } from "../redux/idForNotification/idForNotAction";

export const checkMessagesForNote = (habitsList, habitsInfo, dispatch) => {
  const notificationArr = [];
  const userCompletedHabitsID = [];
  const userSuccessCompletedHabitsID = [];
  const dateToday = new Date();
  const dateNow = moment(dateToday).format().substring(0, 10);
  const date = "2020-11-11";

  const completedHabits = habitsList.filter(
    (habit) =>
      habit.data.every((elem) => elem === true || elem === null) && habit
  );

  completedHabits.map((item) =>
    item.data.every((el) => el === true)
      ? userSuccessCompletedHabitsID.push(item["_id"])
      : userCompletedHabitsID.push(item["_id"])
  );

  const arrayTodayCompletedHabitsID = habitsInfo
    .filter(
      (habit) => habit.dates[habit.dates.length - 1].split("T")[0] === dateNow
    )
    .map((habit) => habit.habitId);
  console.log("str");
  const setNotificationArray = (habitsArray1, habitsArray2) =>
    arrayTodayCompletedHabitsID.map((key) => {
      habitsArray1.map((id) => {
        if (id === key) {
          notificationArr.push("success");
        }
      });
      habitsArray2.map((id) => {
        if (id === key) {
          notificationArr.push("completed");
          // console.log("doit");
        }
      });
    });

  setNotificationArray(userSuccessCompletedHabitsID, userCompletedHabitsID);
  return notificationArr;
};
