import React from "react";
import "./avatarsPage.css";
import { v4 as uuidv4 } from "uuid";
import avatar1 from "../../images/avatars/Avatar-1.png";
import avatar2 from "../../images/avatars/Avatar-2.png";
import avatar3 from "../../images/avatars/Avatar-3.png";
import avatar4 from "../../images/avatars/Avatar-4-1.png";
import avatar5 from "../../images/avatars/Avatar-4.png";
import avatar6 from "../../images/avatars/Avatar-5.png";
import avatar7 from "../../images/avatars/Avatar-6.png";
import avatar8 from "../../images/avatars/Avatar-7.png";
import avatar9 from "../../images/avatars/Avatar-8.png";
import avatar10 from "../../images/avatars/Avatar-9.png";
import avatar11 from "../../images/avatars/Avatar-10.png";
import avatar12 from "../../images/avatars/Avatar-11.png";
import avatar13 from "../../images/avatars/Avatar-12.png";
import avatar14 from "../../images/avatars/Avatar-13.png";
import avatar15 from "../../images/avatars/Avatar-default.png";
import avatar16 from "../../images/avatars/Avatar.png";
export const AvatarsPage = () => {
  return (
    <div className="avatar-list-section">
      <div className="avatar-container">
        <div className="avatar-header">
          <h2 className="avatar-header-title">Выбрать другой аватар</h2>
        </div>
        <ul className="avatar-list">
          <li key="avatar1" className="avatar-item">
            <img src={avatar1} alt="avatar1" width="120px" height="120px" />
          </li>
          <li key="avatar2" className="avatar-item">
            <img src={avatar2} alt="avatar2" width="120px" height="120px" />
          </li>
          <li key="avatar3" className="avatar-item">
            <img src={avatar3} alt="avatar3" width="120px" height="120px" />
          </li>
          <li key="avatar4" className="avatar-item">
            <img src={avatar4} alt="avatar4" width="120px" height="120px" />
          </li>
          <li key="avatar5" className="avatar-item">
            <img src={avatar5} alt="avatar5" width="120px" height="120px" />
          </li>
          <li key="avatar6" className="avatar-item">
            <img src={avatar6} alt="avatar6" width="120px" height="120px" />
          </li>
          <li key="avatar7" className="avatar-item">
            <img src={avatar7} alt="avatar7" width="120px" height="120px" />
          </li>
          <li key="avatar8" className="avatar-item">
            <img src={avatar8} alt="avatar8" width="120px" height="120px" />
          </li>
          <li key="avatar9" className="avatar-item">
            <img src={avatar9} alt="avatar9" width="120px" height="120px" />
          </li>
          <li key="avatar10" className="avatar-item">
            <img src={avatar10} alt="avatar10" width="120px" height="120px" />
          </li>
          <li key="avatar11" className="avatar-item">
            <img src={avatar11} alt="avatar11" width="120px" height="120px" />
          </li>
          <li key="avatar12" className="avatar-item">
            <img src={avatar12} alt="avatar12" width="120px" height="120px" />
          </li>
          <li key="avatar13" className="avatar-item">
            <img src={avatar13} alt="avatar13" width="120px" height="120px" />
          </li>
          <li key="avatar14" className="avatar-item">
            <img src={avatar14} alt="avatar14" width="120px" height="120px" />
          </li>
          <li key="avatar15" className="avatar-item">
            <img src={avatar15} alt="avatar15" width="120px" height="120px" />
          </li>
          <li key="avatar16" className="avatar-item">
            <img src={avatar16} alt="avatar16" width="120px" height="120px" />
          </li>
        </ul>
      </div>
    </div>
  );
};
