import React from "react";
import "./notification.css";

export const NotificationItem = ({ text }) => (
  <>
    <li className="section-item">
      <div className="item">
        <h2 className="item-title">
          {text === "success" ? "Привычка успешно завершена!" : "Привычка завершена!"}
        </h2>
        <p className="item-text">
          Поздравляем! Вы {text === "success" ? "успешно" : ""} завершили свою привычку.
        </p>
      </div>
    </li>
  </>
);
