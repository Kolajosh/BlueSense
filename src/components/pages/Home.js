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
        <title>Blog | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/" />
        <meta
          name="description"
          content="BlueSense Business Intelligence Management Consulting Firm"
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, Startups, Intelligence, Blog, Articles"
        />
      </Helmet>
      <HeroSection />
      <Cards />
      <LogoComponent />
      <Hwwsection />
    </>
  );
}
