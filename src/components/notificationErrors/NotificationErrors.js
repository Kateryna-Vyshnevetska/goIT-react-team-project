import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { errors } from "../../redux/checkErrors/errorActions";
import "./notificationErrors.css";


export const NotificationErrors = ({ message }) => {
    const dispatch = useDispatch()

  const state = useSelector((state) => state);
  const [NotificationError, setNotificationError] = useState(false);
  useEffect(() => { 
    if (state.errors !== "") {
      setNotificationError(true)
    }
  }, [state.errors])
    // console.log(state);
    useEffect(() => {
    if (NotificationError === false) {
      dispatch(errors(""));
    }
}, [NotificationError]);
      return (
        <>
          <CSSTransition
            in={NotificationError}
            className="notificationLogin"
            timeout={2000}
            unmountOnExit
            onEntered={() => setNotificationError(false)}
          >
            <h3 className="notificationLogin">{message}</h3>
          </CSSTransition>
        </>
      );
}
