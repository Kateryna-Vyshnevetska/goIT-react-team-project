import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./userData.css";
import { logOut } from "../../../redux/operations";

export const UserData = () => {
  const dispatch = useDispatch();

  const clickTologOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div className="leftSideBar-userData">
        <Router>
          <Link to="#" className="leftSideBar-user-link">
            <div className="leftSideBar-user-avatar">
              <img alt="avatar" />
            </div>
            <p className="leftSideBar-user-name">Name surname</p>
          </Link>
          <Route path="#" />
        </Router>
        <button
          type="button"
          onClick={clickTologOut}
          className="leftSideBar-user-button"
        >
          Logout
        </button>
      </div>
    </>
  );
};
