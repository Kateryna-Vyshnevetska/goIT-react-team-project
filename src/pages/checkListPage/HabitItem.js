import React from "react";
import { LinearProgressWithLabel } from "../../ui/ProgressBar";
import {
  handleClickHabitButtonMissed,
  handleClickHabitButtonDone,
  getRandomColor,
} from "../../helpers/CheckListPage";

export function HabitItem({
  habitMissedNumber = 0,
  habitDoneNumber = 0,
  habitTitle = "Утренняя зарядка 10-15 мин",
  linearProgressValue = 10,
}) {
  return (
    <>
      <li className="habit-item" style={{ borderColor: getRandomColor() }}>
        <div className="habit-scale-container">
          <h3 className="habit-title">{habitTitle}</h3>
          <div className="habit-scale">
            <LinearProgressWithLabel value={linearProgressValue} />
            <button
              className="btn done"
              onClick={handleClickHabitButtonDone}
            ></button>
            <button
              className="btn missed"
              onClick={handleClickHabitButtonMissed}
            ></button>
          </div>
          <p className="habit-scale-text">Прогресс привития привычки</p>
          <button className="btn-settings"></button>
        </div>
        <div className="habit-number-counter">
          <div className="habit-done">
            <p>К-во выполненных дней</p>
            <span className="habit-done-number">{habitDoneNumber}</span>
          </div>
          <div className="habit-missed">
            <p>К-во пропущенных дней</p>
            <span className="habit-missed-number">{habitMissedNumber}</span>
          </div>
        </div>
      </li>
      <li className="habit-item" style={{ borderColor: getRandomColor() }}>
        <div className="habit-scale-container">
          <h3 className="habit-title">{habitTitle}</h3>
          <div className="habit-scale">
            <LinearProgressWithLabel value={linearProgressValue} />
            <button
              className="btn done"
              onClick={handleClickHabitButtonDone}
            ></button>
            <button
              className="btn missed"
              onClick={handleClickHabitButtonMissed}
            ></button>
          </div>
          <p className="habit-scale-text">Прогресс привития привычки</p>
          <button className="btn-settings"></button>
        </div>
        <div className="habit-number-counter">
          <div className="habit-done">
            <p>К-во выполненных дней</p>
            <span className="habit-done-number">{habitDoneNumber}</span>
          </div>
          <div className="habit-missed">
            <p>К-во пропущенных дней</p>
            <span className="habit-missed-number">{habitMissedNumber}</span>
          </div>
        </div>
      </li>
      <li className="habit-item" style={{ borderColor: getRandomColor() }}>
        <div className="habit-scale-container">
          <h3 className="habit-title">{habitTitle}</h3>
          <div className="habit-scale">
            <LinearProgressWithLabel value={linearProgressValue} />
            <button
              className="btn done"
              onClick={handleClickHabitButtonDone}
            ></button>
            <button
              className="btn missed"
              onClick={handleClickHabitButtonMissed}
            ></button>
          </div>
          <p className="habit-scale-text">Прогресс привития привычки</p>
          <button className="btn-settings"></button>
        </div>
        <div className="habit-number-counter">
          <div className="habit-done">
            <p>К-во выполненных дней</p>
            <span className="habit-done-number">{habitDoneNumber}</span>
          </div>
          <div className="habit-missed">
            <p>К-во пропущенных дней</p>
            <span className="habit-missed-number">{habitMissedNumber}</span>
          </div>
        </div>
      </li>
      <li className="habit-item" style={{ borderColor: getRandomColor() }}>
        <div className="habit-scale-container">
          <h3 className="habit-title">{habitTitle}</h3>
          <div className="habit-scale">
            <LinearProgressWithLabel value={linearProgressValue} />
            <button
              className="btn done"
              onClick={handleClickHabitButtonDone}
            ></button>
            <button
              className="btn missed"
              onClick={handleClickHabitButtonMissed}
            ></button>
          </div>
          <p className="habit-scale-text">Прогресс привития привычки</p>
          <button className="btn-settings"></button>
        </div>
        <div className="habit-number-counter">
          <div className="habit-done">
            <p>К-во выполненных дней</p>
            <span className="habit-done-number">{habitDoneNumber}</span>
          </div>
          <div className="habit-missed">
            <p>К-во пропущенных дней</p>
            <span className="habit-missed-number">{habitMissedNumber}</span>
          </div>
        </div>
      </li>
    </>
  );
}
