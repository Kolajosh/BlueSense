import React from "react";
import "./ProfileIcons.css";
import kola from "../images/Mask-Group-5.png";
function ProfileIcons() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-head">
          <h1>Team</h1>
        </div>
        <div className="icons1">
          <div className="picon1">
            <ul className="picons">
              <li>
                <img src={kola} alt=""></img>
              </li>
            </ul>
            <ul>
              <li>
                <p>Kolawole Ayoola</p>
                <p className="blue">
                  Web Development
                  <br /> Intern
                </p>
              </li>
            </ul>
          </div>
          <div className="picon2">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileIcons;
