import React from "react";
import "./habitItem.css";
// import {color} f rom "./colors"

export const HabitItem = ({nameOfHabit, elemId}) => {
  return (
    <li className="leftSideBar-habits-listItem" key={elemId}>
      <span className="leftSideBar-habits-circle"></span>
      <p className="leftSideBar-listItem-habit">{nameOfHabit}</p>
    </li>
  );
};
