import React from "react";
import christian from "../images/Mask Group.png";
import emmanuel from "../images/emma.png";
import seye from "../images/Mask Group-7.png";
import natasha from "../images/nat.png";
import "./PartnerIcons1.css";

function PartnerIcons1() {
  return (
    <>
      <div className="paticon1-head">
        <h1>Partners</h1>
      </div>
      <ul className="paticons-list">
        <div className="paticon1">
          <img src={christian} alt=""></img>
          <div className="overlay1">
            <p>
              Christian has 15+ years of experience within CX, Advisory,
              Strategy, Learning Development, Operations, Finance, Training.
              Recent work focus has been centred around Strategy Development,
              Leadership Development, Systems Engineering, Executive Advisory,
              and driving Operational Improvements through Technology,
              Digitisation, + People Development.
              <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/christianreuben/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
          <li>
            <p>Christian Reuben</p>
            <p className="blue">Lead Partner</p>
          </li>
        </div>

        <div className="paticon1">
          <img src={emmanuel} alt=""></img>
          <div className="overlay1">
            <p>
              Emmanuel is a multiple CISCO certified IT Specialist with 12+
              years experience in planning, implementing and supporting network
              and security infrastructure in Canada, UK and Nigeria. He is
              currently supports BlueSense with infrastructure consulting
              projects when they arise.
              <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p className="emmanuel">Emmanuel Thom-manuel</p>
            <p className="emmanuel1">
              Emmanuel
              <br /> Thom-manuel
            </p>
            <p className="blue">Operations Partner</p>
          </li>
        </div>

        <div className="paticon1">
          <img src={seye} alt=""></img>
          <div className="overlay1">
            <p>
              Seye is an award winning still-life photographer and
              environmentalist. Inspired by nature, culture and happenings
              around her, she enjoys bringing this creativity to life on our
              projects. She looks at client issues from a unique perspective
              that allows her challenge the status quo + develop solid solves
              for pressing problems.
              <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/seye-jimo-7139781b/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <i class="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
          <li>
            <p>Seye Jimo</p>
            <p className="blue">Creative Partner</p>
          </li>
        </div>

        <div className="paticon1">
          <img src={natasha} alt=""></img>
          <div className="overlay1">
            <p>
              Natasha has a PhD in Risk Assessment Management and vast
              experience working in multiple Governmental sectors. She has a
              strong passion for addressing supporting organisations and driving
              company growth. With her concrete background in research, she
              builds strategy that helps our clients minimise business risks.
              <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/natasha-oyibo-phd-04a7b415/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
          <li>
            <p>Natasha Oyibo</p>
            <p className="blue">Research Partner</p>
          </li>
        </div>
      </ul>
    </>
  );
}

export default PartnerIcons1;
