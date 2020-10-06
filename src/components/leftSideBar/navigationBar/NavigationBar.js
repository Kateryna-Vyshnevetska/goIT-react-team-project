import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import "./navigation.css";
import { useSelector } from "react-redux";
import { notificationType } from "../../../redux/selectors";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 14,
    top: 14,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 1px",
  },
}))(Badge);

export const NavigationBar = () => {
  const state = useSelector((state) => state);
  const notification = notificationType(state);
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
          <StyledBadge badgeContent={notification.length} color="secondary">
            <NavLink
              to={{
                pathname: `/make-it-habit/notification`,
              }}
              className="navLink bell"
              activeClassName="activeNavLink bell"
            ></NavLink>
          </StyledBadge>
        </li>
      </ul>
    </nav>
  );
};
