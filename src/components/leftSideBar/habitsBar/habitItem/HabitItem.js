import React from "react";
import { useSelector } from "react-redux";
import FindHabitById from "../../../../helpers/FindHabitById";
import "./habitItem.css";
// import {color} f rom "./colors"

export const HabitItem = ({ nameOfHabit, elemId }) => {
  
    const userHabits = useSelector(state => state.userHabits)

  const needElementColor = FindHabitById(userHabits, elemId).planningTime.split(" ")[1];
  
  return (
    <li className="leftSideBar-habits-listItem" key={elemId}>
      <span
        className="leftSideBar-habits-circle"
        style={{ backgroundColor: needElementColor }}
      ></span>
      <p className="leftSideBar-listItem-habit">{nameOfHabit}</p>
    </li>
  );
};
