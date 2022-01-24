import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import AboutSection from "../AboutSection";
import AdvisersIcon from "../AdvisersIcon";
import PartnerIcons1 from "../PartnerIcons1";
import ProfileIcons from "../ProfileIcons";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/about/" />
        <meta
          name="description"
          content="BlueSense is a business intelligence consulting firm that is committed to improving clarity, trust, and learning in the workplace. BlueSense has three core competencies:..."
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, Intelligence, Strategy, About, Information, Bluesense about"
        />
      </Helmet>
      <AboutSection />
      <ProfileIcons />
      <PartnerIcons1 />
      <AdvisersIcon />
    </>
  );
}

export default About;
