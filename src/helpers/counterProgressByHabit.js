import FindHabitById from "./FindHabitById";

export const calculateDoneCountHabits = (arrhabits, id) => {
  if (arrhabits.length > 0 && id !== "") {
    const userHabitObj = FindHabitById(arrhabits, id);
    let count = 0;

    for (let i = 0; i < userHabitObj.data.length; i++) {
      if (userHabitObj.data[i] === true) {
        count++;
      }
    }
    return count;
  }
};

export const calculateMissedCountHabits = (arrhabits, id) => {
  if (arrhabits.length > 0 && id !== "") {
    const userHabitObj = FindHabitById(arrhabits, id);
    let count = 0;
    for (let i = 0; i < userHabitObj.data.length; i++) {
      if (userHabitObj.data[i] === false) {
        count++;
      }
    }

    userHabitObj.data.forEach((el) => (el === "false" ? (count += 1) : ""));
    return count;
  }
};
