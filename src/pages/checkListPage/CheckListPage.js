import React from "react";
import "./checkListPage.css";
import { HabitItem } from "../../pages/checkListPage/HabitItem";

export function CheckListPage() {
  return (
    <div className="check-list-section">
      <div className="rightSideBar"></div>
      <div className="habit-container">
        <div className="habit-header">
          <h2 className="habit-header-title">Чек-лист привычек</h2>
          <button className="habit-header-button">+ Сигареты за сегодня</button>
        </div>
        <ul className="habit-list">
          <HabitItem />
        </ul>
      </div>
      <div className="leftSideBar"></div>
    </div>
  );
}
