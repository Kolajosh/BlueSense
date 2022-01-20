import React from "react";
import { Helmet } from "react-helmet";
import "./AnalyticsSection1.css";
import analytics from "../images/analytics.png";
import { Link } from "react-router-dom";

function AnalyticsSection1() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Analytics | Core | BlueSense</title>
        <link rel="canonical" href="https://bluesense.co/analytics" />
        <meta
          name="description"
          content="At BlueSense, our suite of solutions packages proprietary data, software, analytics, and expertise provide clients with a clear view of complex problems."
        />
        <meta
          name="keywords"
          content="Business, Consultng, data, Startups, Intelligence, Strategy, analysis, analytics, Contact"
        />
      </Helmet>
      <div className="analytics-img">
        <img src={analytics} alt=""></img>
        <div className="button-analytics">
          <button className="big-button">
            <Link to="/contact" className="big-btn-link">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </Link>
          </button>
        </div>
      </div>

      <div className="analytics-container">
        <div className="analytics-head">
          <h1>Analytics</h1>
        </div>
        <div className="analytics1-body-1">
          <p>
            Today’s winning organisations need a combination of strategic
            insight, domain expertise, data, and technology; our response is
            simplified solutions-based consulting.
          </p>
        </div>
        <div className="analytics1-body-2">
          <p>
            At <span className="blue">BlueSense</span>, our suite of solutions
            packages proprietary data, software, analytics, and expertise
            provide clients with a clear view of complex problems. Solutions are
            configured to solve challenges in a measurable and repeatable way,
            equipping clients to make better decisions for their businesses.{" "}
            <br></br>
            <span className="blue">Clients</span> work with these tools either
            alongside our engagement teams or by integrating them into their own
            business processes.
          </p>
        </div>
      </div>
    </>
  );
}

export default AnalyticsSection1;
