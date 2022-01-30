import React from "react";
import olaleye from "../images/Mask Group-1.png";
import garza from "../images/Mask Group-2.png";
import "./AdvisersIcon.css";

function PartnerIcons1() {
  return (
    <>
      <div className="adviser1-head">
        <h1>Advisers</h1>
      </div>
      <ul className="paticons-list">
        <div className="adviser1">
          <img src={olaleye} alt=""></img>
          <div className="advisers-overlay">
            <p>
              15+ years of experience within Customer Experience, Strategy,
              Operations and Finance. <br />
              Andrew has worked across North America, Europe, and Sub-Saharan
              Africa. Recent work focus has been centered around driving
              operational improvements through technology and digitization.
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Andrew Olaleye</p>
            <p className="blue">
              Ex. Mckinsey(5yrs)
              <br />
              Harvard MBA
            </p>
          </li>
        </div>

        <div className="adviser1">
          <img src={garza} alt=""></img>
          <div className="advisers-overlay">
            <p>
              <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Andrew Garza</p>

            <p className="blue">
              Ex. Bain(5yrs)
              <br />
              Stanford MBA
            </p>
          </li>
        </div>
      </ul>
    </>
  );
}

export default PartnerIcons1;
