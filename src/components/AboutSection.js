import React from "react";

import "./AboutSection.css";

function AboutSection() {
  return (
    <>
      <div className="about-section-1">
        <h1 className="about-heading">About</h1>
        <p className="about-section-paragraph">
          <span className="about-blue">BlueSense</span> is a business
          intelligence consulting firm that is committed to improving clarity,
          trust, and learning in the workplace.
        </p>
        <p className="about-section-subparagraph">
          <span className="about-blue"> BlueSense</span> has three core
          competencies:
          <br /> Advisory, Strategy and Learning.{" "}
          <span className="about-blue">
            <br />
            i. &nbsp; BlueSense Advisory{" "}
          </span>
          provides research-based recommendations and improvement study for
          client consideration and decision making.
          <span className="about-blue">
            <br />
            ii. &nbsp; BlueSense Strategy
          </span>{" "}
          helps you garner the most insightful information you need to make
          critical decisions that can give your startup a competitive edge.
          <span className="about-blue">
            <br />
            iii. &nbsp;BlueSense Learning
          </span>{" "}
          is at our core and helps you effectively build a competitive team that
          sets your company apart.
        </p>
        <h2 className="about-heading-2">Our History</h2>
        <p className="about-section-paragraph-2">
          We started our consulting services 10+ years ago; since then we have
          been a quiet reasoning partner alongside a number of companies +
          international organisations in a variety of sectors. Working
          hand-in-hand with top tier executives like you to guide them through
          the rough patches of building a robust business in the continent.
        </p>
        <h2 className="about-heading-3">Mission Statement</h2>
        <p className="about-section-paragraph-2">
          Our mission is to help build the next generation of top tier companies
          in the continent.
        </p>
        <h2 className="about-heading-4">Values</h2>
        <p className="about-section-paragraph-2">
          Our values are: Simplicity. Innovation + Challenging Excellence <br />
          <span className="about-blue">
            <br />
            i. &nbsp; Simplicity:{" "}
          </span>
          we believe the most complex problems in the world can be solved by
          clarity in thinking. We have a robust history of simplifying
          challenges for our clientele.
          <span className="about-blue">
            <br />
            ii. &nbsp; Innovation:{" "}
          </span>
          we help startups find the most innovative ways to improve their teams
          + company.
          <span className="about-blue">
            <br />
            iii. &nbsp; Challenging Excellence:{" "}
          </span>
          we work with exceptional clients whom we support to raise their game
          to #1 in what they do; not just in the continent but in the world.
        </p>
        <h2 className="about-heading-5">Vision</h2>
        <p className="about-section-paragraph-3">
          Africa is becoming the next hub for startups + innovation; we want to
          be the go to consulting firm for startups in the continent - for
          advisory, learning + strategy.
        </p>
      </div>

      <div className="about-section-2">
        <h2 className="about-heading-6">Simplify Challenges</h2>
        <p>
          We approach each problem from a unique perspective, as we understand
          that two clients can be in the same industry, having similar issues
          but different problems. In this stead, we begin each solve by taking
          the time to find out what the exact issues; only when we fully
          understand this, do we approach the problem. Our vast industry and
          startup expertise including predictive analytics software solutions
          and emerging technology, allows us to address problems in unique ways
          that no one else can.
        </p>
        <br></br>
        <p>
          We provide advisory, strategy and learning services of the highest
          quality to help build stronger teams, equip executives with the
          necessary skills to handle problems, and guide companies to reach
          their set goals. Our clients are fully involved in the processes since
          we provide personalised solutions to the problems.
        </p>
        <br></br>
        <p>
          We have an enhanced capacity to implement change, build capacity, and
          help organisations transform themselves. Combining the full scope of
          our offer today with the strengths of our clients will spark and drive
          effective and long lasting change.
        </p>
      </div>
    </>
  );
}

export default AboutSection;
