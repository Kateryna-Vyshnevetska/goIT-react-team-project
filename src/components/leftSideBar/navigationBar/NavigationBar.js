import React from "react";
import { Route, Link } from "react-router-dom";
import "./navigation.css";
import {
  handleClickHabitButtonNotification,
  handleClickHabitButtonGrades,
  handleClickHabitButtonCheckList,
} from "../../../helpers/LeftSideBar";

export const NavigationBar = () => {
  return (
    <nav className="leftSideBar-block-navBar">
      <ul className="leftSideBar-listNavBar">
        <li className="leftSideBar-navBarItems">
          <Link
            to="/make-it-habit/check-list"
            className="leftSideBar-navBar-link"
            onClick={handleClickHabitButtonCheckList}
          >
            <div className="leftSideBar-checkList active cup"></div>
          </Link>
        </li>
        <li className="leftSideBar-navBarList">
          <Link
            to="/make-it-habit/achievements"
            className="leftSideBar-navBar-link"
            onClick={handleClickHabitButtonGrades}
          >
            <div className="leftSideBar-checkList grades"></div>
          </Link>
        </li>
        <li className="leftSideBar-navBarList">
          <Link
            to="/make-it-habit/notification"
            className="leftSideBar-navBar-link"
            onClick={handleClickHabitButtonNotification}
          >
            <div className="leftSideBar-checkList note"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
