import moment from "moment";

export const checkMessagesForNote = (habitsList, habitsInfo) => {
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

  const setNotificationArray = (habitsArray1, habitsArray2) =>
    arrayTodayCompletedHabitsID.map((key) => {
      habitsArray1.map(
        (id) =>
          id === key && notificationArr.push({ status: "success", id: id })
      );
      habitsArray2.map(
        (id) =>
          id === key && notificationArr.push({ status: "completed", id: id })
      );
    });

  setNotificationArray(userSuccessCompletedHabitsID, userCompletedHabitsID);
  return notificationArr;
};
