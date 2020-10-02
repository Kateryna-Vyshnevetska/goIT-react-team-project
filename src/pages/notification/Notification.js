import React from "react";
import "./notification.css";
import { NotificationItem } from "./NotificationItem";

export const Notifiacation = () => {
  return (
    <div className="notif-list-section">
      <div className="notif-container">
        <div className="notif-header">
          <h2 className="notif-header-title">Уведомления</h2>
          <p className="notif-header-counter">
            {NotificationItem.length} новых
          </p>
        </div>
        <ul className="notif-list">
          <NotificationItem />
        </ul>
      </div>
    </div>
  );
};
