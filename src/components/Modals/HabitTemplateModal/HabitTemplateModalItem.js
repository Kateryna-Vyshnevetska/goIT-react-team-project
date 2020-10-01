import React from "react";
import "./habitTemplateModal.css";

function HabitTemplateModalItem({
  TemplateHabit = "Начать утро с 10-15 минутной зарядки",
}) {
  return (
    <ul className="habit-template-list">
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
      <li className="habit-template-item">
        <button to="#" className="habit-template-btn">
          {TemplateHabit}
        </button>
      </li>
    </ul>
  );
}

export default HabitTemplateModalItem;
