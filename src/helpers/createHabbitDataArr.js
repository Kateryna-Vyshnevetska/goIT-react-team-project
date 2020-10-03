import React from "react";
import { useDispatch, useStore } from "react-redux";
import { userHabitsDatesCreate } from "../redux/habitsDates/habitsDatesAction";

export const createHabbitDataArr = (habbits) => async (dispatch) => {
  const addOneDay = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      arr.push(newData);
    }
  };

  const addTwoDays = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 2));
      arr.push(newData);
    }
  };

  const MonWedFri = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      if (
        new Date(newData).getDay() === 1 ||
        new Date(newData).getDay() === 3 ||
        new Date(newData).getDay() === 5
      ) {
        arr.push(newData);
      }
    }
  };
  const TueThuSat = (data, arr) => {
    const datanew = new Date(data);
    while (arr.length < 21) {
      const newData = new Date(datanew.setDate(datanew.getDate() + 1));
      if (
        new Date(newData).getDay() === 2 ||
        new Date(newData).getDay() === 4 ||
        new Date(newData).getDay() === 6
      ) {
        arr.push(newData);
      }
    }
  };
  habbits.forEach((el) => {
    const data = el.planningTime.slice(0, 67);
    const datanew = new Date(data);
    let arr = [];
    if (el.iteration == 1) {
      arr.push(datanew);
      addOneDay(data, arr);
      dispatch(userHabitsDatesCreate([{ habitId: el._id, dates: arr }]));
      arr = [];
    }
    if (el.iteration == 2) {
      arr.push(datanew);
      addTwoDays(data, arr);
      dispatch(userHabitsDatesCreate([{ habitId: el._id, dates: arr }]));
      arr = [];
    }
    if (el.iteration == 3) {
      arr.push(datanew);
      MonWedFri(data, arr);
      dispatch(userHabitsDatesCreate([{ habitId: el._id, dates: arr }]));
      arr = [];
    }
    if (el.iteration == 4) {
      arr.push(datanew);
      TueThuSat(data, arr);
      dispatch(userHabitsDatesCreate([{ habitId: el._id, dates: arr }]));
      arr = [];
    }
  });
};
