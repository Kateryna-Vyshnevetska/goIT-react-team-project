import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./habitsBar.css";
import { HabitItem } from "./habitItem/HabitItem";
import HabitChoiceModal from "../../habitChoiceModal/HabitChoiceModal";
import { createHabitAndGetAllHabits } from "../../../redux/operations";


export const HabitsBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(
  //     createHabitAndGetAllHabits(
  //       {
  //         name: "newhabit",
  //         planningTime: "newsome",
  //         iteration: "somenew ",
  //       },
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzZlM2E1ZDFjZTkzMDAxNzExOTg3YSIsImlhdCI6MTYwMTYyNzA0NSwiZXhwIjoxNjAyMjMxODQ1fQ.3jlO6RbHs4aBhfs3pLuaHAIXbGfYC5xHK5Gernq_4RI"
  //     )
  //   );
    
  // }, [])

  const userHabits = useSelector((state) => state.userHabits);

 
  

  const close = () => {
    setModalShow((prev) => !prev);
  };


  return (
    <>
      <div className="leftSideBar-habits">
        <h3 className="leftSideBar-habitsTitle">Привычки</h3>
        <ul className="leftSideBar-habits-list">
          {userHabits.map((el) => (
            <HabitItem nameOfHabit={el.name} elemId={el._id} key={el._id} />
          ))}
        </ul>

        <button
          onClick={() => setModalShow(true)}
          className="leftSideBar-habits-btn"
        >
          Добавить привычку <span className="leftSideBar-habits-plus">+</span>
        </button>
        {modalShow && <HabitChoiceModal close={close} />}
      </div>
    </>
  );
};
