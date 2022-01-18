import React from "react";
import { Link } from "react-router-dom";
import "./AnalyticsSection2.css";

function AnalyticsSection2() {
  return (
    <>
      <div className="analytics-container-2">
        <div className="analytics2-body-1">
          <p>Our solutions deliver meaningful impact through the following:</p>
        </div>
        <div className="analytics2-body-2">
          <ul className="analytics2-body-2-list">
            <li>
              <span className="blue">Research:</span> Our team is second to none
              when it comes to strategy research. We have helped some of the
              world’s leading institutions in gathering, analysing and
              interpreting data from the most difficult sources to help them
              strategise + build a more robust organisation;
            </li>
            <li>
              <span className="blue">Analytics:</span> solving business problems
              through advanced algorithms and tools that analyse large amounts
              of existing client data;
            </li>
            <li>
              <span className="blue">Insigths:</span> providing new information
              on organisations, customers, competitors, and markets through
              unique data and analysis.
            </li>
          </ul>
        </div>
        <div className="big-text">
          <ul>
            <div className="big-text-1">
              <li>
                <h1>5+</h1>
              </li>
              <li>
                <p className="blue">People across solution teams</p>
              </li>
            </div>
            <div className="big-text-2">
              <li>
                <h1>25+</h1>
              </li>
              <li>
                <p className="blue">Technology-based solutions</p>
              </li>
            </div>
          </ul>
        </div>
        <div className="button-a">
          <button className="big-button-a">
            <Link to="/contact" className="big-btn-link">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default AnalyticsSection2;
