import FindHabitById from "./FindHabitById";

export const calculateDoneCountHabits = (arrhabits, id) => {
  if (arrhabits.length > 0 && id !== "") {
    const userHabitObj = FindHabitById(arrhabits, id);
    let count = 0;
    // console.log("обьект для подсчёта в  done ", userHabitObj);

    // userHabitObj.data.forEach((el) => (el === "true" ? (count += 1) : ""));
    for (let i = 0; i < userHabitObj.data.length; i++) {
      // console.log("userHabitObj.data", userHabitObj.data[i]);

      if (userHabitObj.data[i] === true) {
        count++;
      }
    }

    // console.log(`отработал подсчёт сделанных -- сделано ${count}`);
    return count;
  }
};

export const calculateMissedCountHabits = (arrhabits, id) => {
  if (arrhabits.length > 0 && id !== "") {
    const userHabitObj = FindHabitById(arrhabits, id);
    let count = 0;
    // console.log("обьект для подсчёта в  missed ", userHabitObj);

    for (let i = 0; i < userHabitObj.data.length; i++) {
      // console.log("userHabitObj.data", userHabitObj.data[i]);

      if (userHabitObj.data[i] === false) {
        count++;
      }
    }

    userHabitObj.data.forEach((el) => (el === "false" ? (count += 1) : ""));
    // console.log(`отработал подсчёт пропущенных -- проущено ${count}`);
    return count;
  }
};
