import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./navigation.css";
import {
  handleClickHabitButtonNotification,
  handleClickHabitButtonGrades,
  handleClickHabitButtonCheckList,
} from "../../../helpers/LeftSideBar";
export const NavigationBar = () => {
  return (
    <nav className="leftSideBar-block-navBar">
      <Router>
        <ul className="leftSideBar-listNavBar">
          <li className="leftSideBar-navBarItems">
            <Link
              to="#"
              className="leftSideBar-navBar-link"
              onClick={handleClickHabitButtonCheckList}
            >
              <div className="leftSideBar-checkList cup"></div>
            </Link>
          </li>
          <li className="leftSideBar-navBarList">
            <Link
              to="#"
              className="leftSideBar-navBar-link"
              onClick={handleClickHabitButtonGrades}
            >
              <div className="leftSideBar-checkList grades"></div>
            </Link>
          </li>
          <li className="leftSideBar-navBarList">
            <Link
              to="#"
              className="leftSideBar-navBar-link"
              onClick={handleClickHabitButtonNotification}
            >
              <div className="leftSideBar-checkList note"></div>
            </Link>
          </li>
        </ul>
        <Route path="#" />
        <Route path="#" />
        <Route path="#" />
      </Router>
    </nav>
  );
};
