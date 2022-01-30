import React from "react";
import "./StrategySection2.css";
import { Link } from "react-router-dom";

function StrategySection2() {
  return (
    <>
      <div className="strategy-container-2">
        <div className="strategy2-body-1">
          <p>
            Our team of <span className="blue">data analysts</span> and
            researchers come from different industries and technical
            backgrounds. They help clients around the world translate analytical
            insight into real-world strategies and impact.
          </p>
          <p>
            Once tools and models are implemented, we ensure that our clients
            build effective experience so that
            <span className="blue"> strategies</span> become a long-term
            competitive advantage.
          </p>
          <h1>10+</h1>
        </div>
        <div className="strategy2-body-div">
          <p className="blue-strategy">
            Analytics projects across many industries and<br></br>
            functions in the last year
          </p>
        </div>
        <div className="stra-button-div">
          <button className="stra-button">
            <a href="/contact" className="stra-btn-link">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </a>
          </button>
        </div>
        <div className="button-strategy-2">
          <button className="big-Strategybutton-2">
            <Link to="/contact" className="big-Strategybtn-link-2">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default StrategySection2;
