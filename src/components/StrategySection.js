import React from "react";
import { Helmet } from "react-helmet";
import "./StrategySection.css";
import strategy from "../images/strategy.png";
import { Link } from "react-router-dom";

function StrategySection() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Strategy | Core | BlueSense</title>
        <link rel="canonical" href="https://bluesense.co/strategy" />
        <meta
          name="description"
          content="BlueSense Strategy applies the latest analytics tools and state-of-the-art techniques—like machine learning, data mining, and sequential pattern analysis—to change the way companies interact with customers and to help them optimise internal processes. We continue to expand the scope of skills and experience it brings to our clients. "
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, Intelligence, Strategy, Consult, Contact, critical, business, planning"
        />
      </Helmet>
      <div className="strategy-img">
        <img src={strategy} alt=""></img>
        <div className="button-strategy">
          <button className="big-button">
            <Link to="/contact" className="big-btn-link">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </Link>
          </button>
        </div>
      </div>

      <div className="strategy-container">
        <div className="strategy-head">
          <h1>Strategy</h1>
        </div>
        <div className="strategy1-body-1">
          <p>
            Everyday, the amount of data in the world keeps increasing.{" "}
            <span className="blue">Start-ups</span> can make use of the
            available data and resources to improve overall output by taking
            advantage of our unique skills in building strategy.
          </p>
        </div>
        <div className="strategy1-body-2">
          <p>
            <span className="blue">BlueSense</span> Strategy applies the latest
            analytics tools and state-of-the-art techniques—like machine
            learning, data mining, and sequential pattern analysis—to change the
            way companies interact with customers and to help them optimise
            internal processes. We continue to expand the scope of skills and
            experience it brings to our clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default StrategySection;
