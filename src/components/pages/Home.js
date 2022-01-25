import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Hwwsection from "../Hwwsection";
import LogoComponent from "../LogoComponent";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BlueSense | Business Consulting</title>
        <link rel="canonical" href="https://www.bluesense.co/" />
        <meta
          name="description"
          content="BlueSense is a business intelligence management consulting firm. We are the trusted advisors to some of the country’s leading startups, technology companies and a handful of international institutions. We work with leading organisations like yours across private, public and nonprofit sectors to produce bankable results."
        />
        <meta
          name="keywords"
          content="Business, bluesense, Consultng, Startups, Tech Startups, Strategy, BlueSense, Business Consulting"
        />
      </Helmet>
      <HeroSection />
      <Cards />
      <LogoComponent />
      <Hwwsection />
    </>
  );
}
