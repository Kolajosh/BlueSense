import React from "react";
import "./AdvisersIcon.css";
import olaleye from "../images/Mask Group-1.png";
import garza from "../images/Mask Group-2.png";

function AdvisersIcon() {
  return (
    <>
      <div className="advisers-container">
        <div className="advisers-head">
          <h1>Advisers</h1>
        </div>
        <div className="icons1">
          <ul className="picons">
            <div className="picon1">
              <li>
                <img src={olaleye} alt=""></img>
              </li>
              <li>
                <p>Andrew Olaleye</p>
                <p className="blue">
                  Ex. Mckinsey(5yrs)<br></br>Harvard MBA
                </p>
              </li>
            </div>
            <div className="picon2">
              <li>
                <img src={garza} alt=""></img>
              </li>
              <li>
                <p>Andrew Garza</p>
                <p className="blue">
                  Ex. Bain(5yrs)<br></br>Stanford MBA
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdvisersIcon;
