import React from "react";
import home from "../images/homepic.png";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={home} alt="homepic"></img>
      <h1>
        Thinking about transforming<br></br>your start-up? We know how
      </h1>
      <div className="hero-text-container">
        <p>
          BlueSense is a business intelligence management consulting firm. We
          are the trusted advisors to some of the country&rsquo;s leading
          startups, technology companies and a handful of international
          institutions. We work with leading organisations like yours across
          private, public and nonprofit sectors to produce bankable results. Our
          expertise, experience, scope, and knowledge of organisational
          challenges allow us to address problems that no one else can.
        </p>
      </div>
      <div className="hero-btns">
        <Link to="/contact" className="btn-link">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            butttonSize="btn--large"
          >
            Schedule Consultation <i class="fas fa-angle-right"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
