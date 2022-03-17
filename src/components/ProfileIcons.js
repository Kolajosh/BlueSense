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
              Experienced Program Assistant with a demonstrated history of
              working in the information technology and services industry.
              Skilled in AutoCAD, Graphic Design, Web Design, Network Appliance,
              and HTML. Strong administrative professional with a Bsc computer
              science focused in Computer Science from Crawford university.
              <br></br>
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
              Ayomide is an Economics graduate of Covenant University. She
              volunteered as a human resource officer at the Akinbayo Michael
              Foundation for nearly a year.  Currently enrolled in the NYSC
              program. Professional interests include Consulting on management
              issues.
              <br></br>
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
              Mmesoma is an organised, resourceful and driven learner with an
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
