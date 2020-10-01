import React, { useEffect } from "react";
import { connect } from "react-redux";
import achievementAction from "../../redux/achievementAction/achievementAction";
import style from "./AchievementsPage.module.css";

const AchievementsPage = ({
  achievements,
  achievementAction,
  smokedCigarettes,
  quizInfoPerDay,
  quizInfoPerTime,
}) => {
  useEffect(() => {
    achievementAction({
      smokedCigarettes,
      quizInfoPerDay,
      quizInfoPerTime,
    });
  });

  return (
    <>
      <div className={style.achievementsWrapper}>
        <p className={style.achievementsTitle}>Достижения</p>
      </div>
      <div className={style.achievementsContainer}>
        <ul className={style.achievementsPageList}>
          {achievements.map((achievement) => (
            <li
              key={achievement.name}
              className={
                achievement.status
                  ? style.activeClass
                  : style.achievementsPageItem
              }
            >
              <p className={style.achievementsPageText}>{achievement.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    achievements: state.achievement,
    smokedCigarettes: state.cigarettes,
    quizInfoPerDay: state.quizInfo.cigarettesPerDay,
    quizInfoPerTime: state.quizInfo.cigarettesPerTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    achievementAction: (data) => dispatch(achievementAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsPage);
