import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userHabits, usersHabitsDates } from "../../redux/selectors";
import "./notification.css";
import "../../components/RightSideBar/Calendar.module.css";
import { NotificationItem } from "./NotificationItem";
import { checkMessagesForNote } from "../../helpers/checkNotifications";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { countNotesAction } from "../../redux/notificationPage/notificationAction";

export const Notifiacation = () => {
  const state = useSelector((state) => state);
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);
  const dispatch = useDispatch();
  let notificationArr = checkMessagesForNote(habitsList, habitsInfo, dispatch);

  const click = (idx) => {
    notificationArr.splice(idx, 1);
    dispatch(countNotesAction(notificationArr));
  };

  // useEffect(() => {
  //   console.log("effect");
  //   notificationArr = checkMessagesForNote(habitsList, habitsInfo);
  //   console.log(notificationArr);
  // }, [notificationArr]);

  return (
    <div className="notif-list-section">
      <div className="notif-header">
        <h2 className="notif-header-title">Уведомления</h2>
        <p className="notif-header-counter">{notificationArr.length} новых</p>
      </div>
      <div className="notif-content-wrapper">
        <ul className="notif-list">
          <TransitionGroup>
            {notificationArr.length ? (
              notificationArr.map((elem, idx) => (
                <CSSTransition key={idx} timeout={1000} classNames="list-fade">
                  <NotificationItem
                    key={idx}
                    id={idx}
                    text={elem}
                    onClick={click}
                  />
                </CSSTransition>
              ))
            ) : (
              <li>
                <p className="notificationText">У Вас нет новых уведомлений</p>
              </li>
            )}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};
