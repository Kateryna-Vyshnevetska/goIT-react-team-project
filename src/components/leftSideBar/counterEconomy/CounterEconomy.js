import React, { Component } from "react";
import "./counterEconomy.css";
import { useSelector } from "react-redux";


export class CounterEconomy extends Component {
  render() {
    let hours;
    const { money, time } = this.props;

    time < 0
      ? (hours = Math.round(time / 60))
      : (hours = Math.floor(time / 60));
    let minutes = time - hours * 60;

    console.log("time", time);

    return (
      <>
        <div className="leftSideBar-economyContainer">
          <ul className="leftSideBar-economyList">
            <li className="leftSideBar-item">
              <p className="leftSideBar-economyTitle">Сэкономленные деньги</p>
              <p className="leftSideBar-wallet countEconomy">{money} ₴</p>
            </li>
            <li className="leftSideBar-item">
              <p className="leftSideBar-economyTitle">Сэкономленное время</p>
              <p className="leftSideBar-sandclock countEconomy">
                {hours} ч {minutes} мин
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}


// export const CounterEconomy = (money, hours, minutes) => {
//   return (
//     <>
//       <div className="leftSideBar-economyContainer">
//         <ul className="leftSideBar-economyList">
//           <li className="leftSideBar-item">
//             <p className="leftSideBar-economyTitle">Сэкономленные деньги</p>
//             <p className="leftSideBar-wallet countEconomy">1200,0 ₴</p>
//           </li>
//           <li className="leftSideBar-item">
//             <p className="leftSideBar-economyTitle">Сэкономленное время</p>
//             <p className="leftSideBar-sandclock countEconomy">02ч 00мин</p>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

