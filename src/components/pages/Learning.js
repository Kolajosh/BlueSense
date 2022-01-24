import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import LearningSection from "../LearningSection";

export default function Learning() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Learning | Core | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/learning/" />
        <meta
          name="description"
          content="BlueSense learning brings together expertise in technology, management, design, strategy, organisation, and analytics to help clients reinvent themselves. "
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, learning, Strategy, learn, Contact, workshop, leadership"
        />
      </Helmet>
      <LearningSection />
    </>
  );
}
