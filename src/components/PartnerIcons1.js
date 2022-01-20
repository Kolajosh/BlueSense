import React from "react";
import christian from "../images/Mask Group.png";
import emmanuel from "../images/Mask Group-6.png";
import seye from "../images/Mask Group-7.png";
import natasha from "../images/Mask Group-3.png";
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
              Christian is a consultant + coach. He helps organisations in the
              continent build people. As Lead Partner for Reuben & Company
              Project, he helps build teams to work seamlessly, analyse (through
              concrete research), the best strategies for growth and advise
              startups on how to effectively improve human energy. <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
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
              Emmanuel is a multiple CISCO certified IT Speacialist with 8+
              years experience in planning, implementing and supporting network
              and security infrastructure in Canada, UK, and Nigeria. He has
              experience with Saipem, Siemens UK, to mention but a few.{" "}
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
              around her, she enjoys telling stories with her images. She tells
              these stories throught photography that is as thought-provoking as
              it is beautiful. She is a skilled creative artist who works with
              vision and compassion. <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
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
              Natasha has a PhD in Risk Assesment Management and vast experience
              working in different sectors. She has a strong passion for
              addressing risk management issues and improving business outcomes.
              She has a concrete background in research with a focus on Risk
              Management that she deploys on client projects. <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
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
