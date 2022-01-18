import React from "react";
import { Helmet } from "react-helmet";
import "./AdvisorySection.css";
import advisory from "../images/advisory.png";
import { Link } from "react-router-dom";

function AdvisorySection() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BlueSense | Core | Advisory</title>
        <link rel="canonical" href="https://bluesense.co/advisory" />
        <meta
          name="description"
          content="BlueSense Advisory helps teams and managers build the skills needed for long-term success."
        />
      </Helmet>
      <div className="advisory-img">
        <img src={advisory} alt=""></img>
        <div className="button-advisory">
          <button className="big-button">
            <Link to="/contact" className="big-btn-link">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </Link>
          </button>
        </div>
      </div>

      <div className="advisory-container">
        <div className="advisory-head">
          <h1>Advisory</h1>
        </div>
        <div className="advisory1-body-1">
          <p>
            <span className="blue">
              We provide fully informed and data based research to solve our
              client's problems.
            </span>
          </p>
        </div>
        <div className="advisory1-body-2">
          <p>
            Organisational <span className="blue">transformations</span> often
            fall short of achieving full impact. Only one-third of
            transformations achieve full impact. That’s because most companies
            do not place enough emphasis on building new skills that can be
            scaled to the entire organisation.{" "}
            <span className="blue">BlueSense Advisory</span> helps teams and
            managers build the skills needed for long-term success.
          </p>
          <p>
            <span className="blue">BlueSense</span> advisory brings together
            expertise in technology, management, design, strategy, organisation,
            and analytics to help clients reinvent themselves. We partner with
            our clients to build, operate, and then transfer newly acquired
            skills, so clients can thrive over the long term.
          </p>
          <p>
            We employ experiential learning, risk-free settings, real-work
            circumstances, and expert faculty that enable our clients to apply
            these capabilities directly. We provide{" "}
            <span className="blue">advisory</span> services in all sectors of
            the economy.
          </p>
        </div>
      </div>

      <div className="advisory-container-2">
        <h1>50+</h1>
        <div className="advisory-body-div">
          <p className="blue-advisory">
            Relationships with <br></br>
            technology companies + their executives
          </p>
        </div>
        <div className="button-advisory-2">
          <button className="big-button-2">
            <Link to="/contact" className="big-btn-link-2">
              Schedule Consultation <i class="fas fa-caret-right"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default AdvisorySection;
