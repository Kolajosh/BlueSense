import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import AdvisorySection from "../AdvisorySection";

export default function Advisory() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advisory | Core | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/advisory/" />
        <meta
          name="description"
          content="BlueSense Advisory helps teams and managers build the skills needed for long-term success."
        />
        <meta
          name="keywords"
          content="Business, Consultng,  Strategy, Consult, Contact, advisory, advise"
        />
      </Helmet>
      <AdvisorySection />
    </>
  );
}
