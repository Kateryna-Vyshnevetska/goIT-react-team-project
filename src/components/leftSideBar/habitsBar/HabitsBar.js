import React from "react";
import "./habitsBar.css";
import { HabitItem } from "./habitItem/HabitItem"
export const HabitsBar = () => {
    return (
        <>
            <div className="leftSideBar-habits">
                <h3 className="leftSideBar-habitsTitle">Привычки</h3>
                <ul className="leftSideBar-habits-list">
                    <HabitItem />
                </ul>
                <button className="leftSideBar-habits-btn"> Добавить привычку <span className="leftSideBar-habits-plus">+</span></button>
            </div>
        </>
    )
}