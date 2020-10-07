import React from "react";
import "./notification.css";

export const NotificationItem = ({ text, id, onClick, name }) => {
  return (
    <>
      <li className="section-item" id>
        <div className="item">
          <h2 className="item-title">
            {text === "success"
              ? `Привычка ${name} успешно завершена!`
              : `Привычка ${name} завершена!`}
          </h2>
          <p className="item-text">
            Поздравляем! Вы {text === "success" ? "успешно" : ""} завершили свою
            привычку.
          </p>
        </div>
      </li>
    </>
  );
};
