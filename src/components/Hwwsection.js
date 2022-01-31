import React from "react";
import "./Hwwsection.css";

function Hwwsection() {
  return (
    <>
      <div className="hww-container">
        <h1 className="hww-heading">How We Work</h1>
        <p className="hww-body">
          How we work we support organisations through a detailed
          diagnostic-approach; researching organisational problems to find out
          what challenges your company+teams on a day-to-day; then build out
          proactive solutionsthat utilise our expertise + experience to solve
          your most pressing problems and attain set goals & objectives.
        </p>
        <br />
        <div className="hww-foot-div">
          <ul className="hww-big-ul">
            <li className="hww-big-list">
              <h1>
                49 <span class="icon-right-arrow-123"></span>
                <li> </li>
              </h1>
            </li>
            <li className="hww-big-list1">
              <h1>
                30 DAYS <span class="icon-right-arrow-123"></span>
                <li> </li>
              </h1>
            </li>
            <li>
              <h1 className="hww-big-list2">
                $100M+ <li></li>
              </h1>
            </li>
          </ul>
          <ul className="hww-foot-ul">
            <li className="hww-foot-list">Projects Executed</li>
            <div className="hww1">
              <li>Average Project Length</li>
            </div>
            <div className="hww2">
              <li>Added to Client Bottomline</li>
            </div>
          </ul>
        </div>

        <div className="hww-box">
          <div className="hww-box-1">
            <div className="hww-box-title">
              <h2>45</h2>
            </div>
            <div className="hww-box-content">
              <p>Projects Executed</p>
            </div>
          </div>

          <div className="hww-box-2">
            <div className="hww-box-title">
              <h2>3.5 MONTHS</h2>
            </div>
            <div className="hww-box-content">
              <p>Average Project Length</p>
            </div>
          </div>

          <div className="hww-box-3">
            <div className="hww-box-title">
              <h2>$100+</h2>
            </div>
            <div className="hww-box-content">
              <p>Added to Client Bottomline</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hwwsection;
