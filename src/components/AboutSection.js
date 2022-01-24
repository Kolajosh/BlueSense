import React from "react";
import { Helmet } from "react-helmet";

import "./AboutSection.css";

function AboutSection() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/about" />
        <meta
          name="description"
          content="BlueSense is a business intelligence consulting firm that is committed to improving clarity, trust, and learning in the workplace. BlueSense has three core competencies:..."
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, Intelligence, Strategy, About, Information, Bluesense about"
        />
      </Helmet>
      <div className="about-section-1">
        <h1 className="about-heading">About</h1>
        <p className="about-section-paragraph">
          <span className="about-blue">BlueSense</span> is a business
          intelligence consulting firm that is committed to improving clarity,
          trust, and learning in the workplace. BlueSense has three core
          competencies:
        </p>
        <p className="about-section-subparagraph">
          <span className="about-blue">Advisory + Strategy + Learning</span>
        </p>
        <ol className="about-section-paragraph-list">
          <li>
            <span className="about-blue">i</span>&nbsp; BlueSense Advisory
            provides research-based recommendations and improvement study for
            client consideration and decision making.
          </li>
          <li>
            <span className="about-blue">ii</span>&nbsp; BlueSense Strategy
            helps you garner the most insightful information you need to make
            critical decisions that can give your company a competitive edge.
          </li>
          <li>
            <span className="about-blue">iii</span> &nbsp;BlueSense Learning is
            at our core and helps you effectively build a competitive team that
            sets your company apart.
          </li>
        </ol>

        <h2 className="about-heading-2">Our History</h2>
        <p className="about-section-paragraph-2">
          We started our consulting services 7+ years ago; since then we have
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
        <p className="about-section-paragraph-2">Our values are:</p>
        <p className="about-section-subparagraph-2">
          <span className="about-blue-subparagraph">
            Simplicity + Innovation + Challenging Excellence
          </span>
        </p>
        <ol className="about-section-paragraph-2">
          <li>
            <span className="about-blue">i</span>&nbsp; Simplicity: we believe
            the most complex problems in the world can be solved by clarity in
            thinking. We have a robust history of simplifying challenges for our
            clientele.
          </li>
          <li>
            <span className="about-blue">ii</span>&nbsp; Innovation: we help
            companies find the most innovative ways to improve their teams +
            company.
          </li>
          <li>
            <span className="about-blue">iii</span>&nbsp; Challenging
            Excellence: we work with exceptional clients whom we support to
            raise their game to #1 in what they do; not just in the continent
            but in the world.
          </li>
        </ol>
        <h2 className="about-heading-5">Vision</h2>
        <p className="about-section-paragraph-3">
          Africa is becoming the next hub for companies + innovation; we want to
          be the go to consulting firm for companies in the continent - for
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
