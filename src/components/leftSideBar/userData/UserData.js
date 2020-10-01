import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./userData.css";
export const UserData = () => {
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
        <button type="button" className="leftSideBar-user-button">Logout</button>
      </div>
    </>
  );
};
