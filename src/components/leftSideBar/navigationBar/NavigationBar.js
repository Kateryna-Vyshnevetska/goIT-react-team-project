import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import "./navigation.css";
import { useSelector } from "react-redux";
import {
  notificationType,
  userHabits,
  usersHabitsDates,
} from "../../../redux/selectors";
import { withStyles } from "@material-ui/core/styles";
import { checkMessagesForNote } from "../../../helpers/checkNotifications";
import FindHabitById from "../../../helpers/FindHabitById";

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
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);
  const [countS, setCountS] = useState(0);

  const arrOfhabitDone = [];

  const notificationArr = checkMessagesForNote(habitsList, habitsInfo);
  notificationArr.forEach((el) =>
    arrOfhabitDone.push(FindHabitById(habitsList, el.id))
  );

  useEffect(() => {
    const dataFromStorage = localStorage.getItem("habitsId");
    const habitsStorage = JSON.parse(dataFromStorage);
    if (habitsStorage && notificationArr.length > 0) {
      setCountS(notificationArr.length - habitsStorage.length);
    }
  }, [notificationArr]);

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
          <StyledBadge badgeContent={countS > 0 ? countS : 0} color="secondary">
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
