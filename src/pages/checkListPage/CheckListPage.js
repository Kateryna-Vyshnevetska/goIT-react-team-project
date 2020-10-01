import React from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./checkListPage.css";
import { LinearProgressWithLabel } from "../../ui/ProgressBar";

export function CheckListPage() {
  function Colors() {
    let color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 50)}) `;
    return color;
  }
  return (
    <div className="check-list-section">
      <div className="rightSideBar"></div>
      <div className="habit-container">
        <div className="habit-header">
          <h2 className="habit-header-title">Чек-лист привычек</h2>
          <button className="habit-header-button">+ Сигареты за сегодня</button>
        </div>
        <ul className="habit-list">
          <li className="habit-item" style={{ borderColor: Colors() }}>
            <div className="habit-scale-container">
              <h3 className="habit-title">Утренняя зарядка 10-15 мин</h3>
              <div className="habit-scale">
                <LinearProgressWithLabel value={50} />
                <button className="btn done"></button>
                <button className="btn missed"></button>
              </div>
              <p className="habit-scale-text">Прогресс привития привычки</p>
              <button className="btn settings"></button>
            </div>
            <div className="habit-number-counter">
              <div className="habit-done">
                <p>К-во выполненных дней</p>
                <span className="habit-done-number">5</span>
              </div>
              <div className="habit-missed">
                <p>К-во пропущенных дней</p>
                <span className="habit-missed-number">5</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="leftSideBar"></div>
    </div>
  );
}
