import React from "react";
import { LinearProgressWithLabel } from "../../ui/ProgressBar";
import { getRandomColor } from "../../helpers/getRandomColor";
import { handleClickHabitButton } from "../../helpers/handleClickHabitButton";

export function HabitItem() {
  return (
    <li className="habit-item" style={{ borderColor: getRandomColor() }}>
      <div className="habit-scale-container">
        <h3 className="habit-title">Утренняя зарядка 10-15 мин</h3>
        <div className="habit-scale">
          <LinearProgressWithLabel value={50} />
          <button
            className="btn done"
            onClick={handleClickHabitButton}
          ></button>
          <button
            className="btn missed"
            onClick={handleClickHabitButton}
          ></button>
        </div>
        <p className="habit-scale-text">Прогресс привития привычки</p>
        <button className="btn-settings"></button>
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
  );
}
