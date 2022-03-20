import React from "react";
import kola from "../images/Mask-Group-5.png";
import ayomide from "../images/ayomide.png";
import mme from "../images/mme.png";
import orejah from "../images/orejah.png";
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
              Experienced Web Developer with a demonstrated history of working
              in the information technology and services industry. Skilled in
              AutoCAD, Graphic Design, Web Design, Network Appliance, and HTML.
              Strong administrative professional with a First Class degree in
              BSc Computer Science from Crawford university.
              <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/kolawole-ayoola-264118186/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
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
              <a
                href="https://www.linkedin.com/in/ayomidefasan/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
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
              avid interest in Corporate Law, Product Management and
              Intellectual Property. Armed with extensive knowledge in Business,
              Law and Legal procedures and seeking to obtain advanced
              professional skills while pursuing organisational goals..{" "}
              <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/mmesoma-otuokere-067246194/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
          <li>
            <p>Mmesoma Otuokere</p>
            <p className="blue">Business Analyst Intern</p>
          </li>
        </div>

        <div className="profile1">
          <img src={orejah} alt=""></img>
          <div className="profile-overlay">
            <p>
              Orejah is a computer science graduate of Olabisi Onabanjo
              University who is passionate about gathering knowledge on how to
              use new technologies to solve problems in the corporate sector and
              increase growth. <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/ayeni-orejah/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
          <li>
            <p>Ayeni Orejah</p>
            <p className="blue">Growth Analyst Intern</p>
          </li>
        </div>
      </ul>
    </>
  );
}

export default PartnerIcons1;
