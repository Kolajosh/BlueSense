import React from "react";
import home from "../images/homepic.png";
import hero from "../images/hero.png";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={home} alt="homepic" className="big-pic"></img>
      <img src={hero} alt="homepic" className="small-pic"></img>
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
        <a href="/contact" className="btn-link">
          <button className="hsbutton">
            Schedule Consultation <i class="fas fa-angle-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
