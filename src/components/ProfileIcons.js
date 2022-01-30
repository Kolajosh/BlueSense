import React from "react";
import kola from "../images/Mask-Group-5.png";
import ayomide from "../images/ayomide.png";
import mme from "../images/mme.png";
import "./ProfileIcons.css";

function PartnerIcons1() {
  return (
    <>
      <div className="profile1-head">
        <h1>Team</h1>
      </div>
      <ul className="paticons-list">
        <div className="profile1">
          <img src={kola} alt=""></img>
          <div className="profile-overlay">
            <p>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Kolawole Ayoola</p>
            <p className="blue">Web Development Intern</p>
          </li>
        </div>

        <div className="profile1">
          <img src={ayomide} alt=""></img>
          <div className="profile-overlay">
            <p>
              Ayomide is a fresh graduate of Economics from Covenant University
              (CU). Currently undergoing NYSC program. Area of professional
              interest is Management Consulting.<br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Ayomide Fasan</p>

            <p className="blue">Business Analyst Intern</p>
          </li>
        </div>

        <div className="profile1">
          <img src={mme} alt=""></img>
          <div className="profile-overlay">
            <p>
              Mmesoma is an organized, resourceful and driven learner with an
              avid interest in Corporate law, Product management and
              Intellectual property. Armed with extensive knowledge in Business,
              Law and Legal procedures and seeking to obtain advanced
              professional skills while pursuing Organizational goals..{" "}
              <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Mmesoma Otuokere</p>
            <p className="blue">Business Analyst Intern</p>
          </li>
        </div>
      </ul>
    </>
  );
}

export default PartnerIcons1;
