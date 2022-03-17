import React from "react";
import olaleye from "../images/Mask Group-1.png";
import garza from "../images/Mask Group-2.png";
import new1 from "../images/new1.png";
import new2 from "../images/new2.png";

import "./AdvisersIcon.css";

function PartnerIcons1() {
  return (
    <>
      <div className="adviser1-head">
        <h1>Advisory</h1>
      </div>
      <ul className="paticons-list">
        <div className="adviser1">
          <img src={olaleye} alt=""></img>
          <div className="advisers-overlay">
            <p>
              15+ years of experience within Customer Experience, Strategy,
              Operations and Finance. Andrew has worked across North America,
              Europe, and Sub-Saharan Africa. Recent work focus has been centred
              around driving operational improvements through technology and
              digitisation.
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
          <img src={new2} alt=""></img>
          <div className="advisers-overlay">
            <p>
              <h4>Co-founder</h4>
              <br />
              Nadayar is co-founder and CEO at Eden Life, a tech-enabled
              services company that automates home chores. Driven by a passion
              for technology, Nadayar had previously co-founded Fora + Andela.
              He has a proven track record of building enterprise software.
              <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Nadayar Enegesi</p>
            <p className="blue">
              Co-founder Andela
              <br />
              Co-founder Eden
            </p>
          </li>
        </div>

        <div className="adviser1">
          <img src={garza} alt=""></img>
          <div className="advisers-overlay">
            <p>
              <h4>Co-founder</h4>
              <br />
              Andrew is Co-Founder and COO of Lifestores Pharmacy, a chain of
              mass-market pharmacies in Nigeria. Previously, he was the Senior
              Manager of Supply Chain & Business Development at CHI
              Pharmaceuticals in Lagos, Nigeria. He received an MBA from
              Stanford University and a BA in Sociology/Economics from Haverford
              College.
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

        <div className="adviser1">
          <img src={new1} alt=""></img>
          <div className="advisers-overlay">
            <p>
              <br />
              Lisa is Project Lead, Humanitarian + Resilience Investing at the
              World Economic Forum (WEF). Previously she was Programme Manager,
              Private Sector Development and Innovation and a Blue Book Trainee,
              Cabinet of Jean-Claude Juncker at the European Commission.
              <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
          <li>
            <p>Lisa Satolli</p>
            <p className="blue">
              Project Lead
              <br />
              World Economic Forum
            </p>
          </li>
        </div>
      </ul>
    </>
  );
}

export default PartnerIcons1;
