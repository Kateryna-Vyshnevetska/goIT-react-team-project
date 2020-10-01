import React from "react";
import "./habitItem.css";
// import {color} f rom "./colors"

export const HabitItem = (habit) => {
    return (
        <li className="leftSideBar-habits-listItem">
            <span className="leftSideBar-habits-circle"></span>
            {/* <p className="leftSideBar-listItem-habit">{habit}</p> */}
        </li>    
    )
}