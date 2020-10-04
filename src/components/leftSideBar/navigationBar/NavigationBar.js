import React from "react";
import {
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
  NavLink,
} from "react-router-dom";
import "./navigation.css";

export const NavigationBar = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  console.log(match);
  return (
    <nav className="leftSideBar-block-navBar">
      <ul className="leftSideBar-listNavBar">
        <li className="leftSideBar-navBarItems">
          <NavLink
            to={{
              pathname: `/make-it-habit/check-list`,
            }}
            className="navLink calendar"
            activeClassName="activeNavLink calendar"
          ></NavLink>
        </li>
        <li className="leftSideBar-navBarItems">
          <NavLink
            to={{
              pathname: `/make-it-habit/achievements`,
            }}
            className="navLink cup"
            activeClassName="activeNavLink cup"
          ></NavLink>
        </li>
        <li className="leftSideBar-navBarItems">
          <NavLink
            to={{
              pathname: `/make-it-habit/notification`,
            }}
            className="navLink bell"
            activeClassName="activeNavLink bell"
          ></NavLink>
        </li>
      </ul>
    </nav>
  );
};
