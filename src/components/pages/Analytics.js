import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import AnalyticsSection1 from "../AnalyticsSection1";
import AnalyticsSection2 from "../AnalyticsSection2";

export default function Analytics() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Analytics | Core | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/analytics/" />
        <meta
          name="description"
          content="At BlueSense, our suite of solutions packages proprietary data, software, analytics, and expertise provide clients with a clear view of complex problems."
        />
        <meta
          name="keywords"
          content="Business, bluesense, BlueSense Consultng, data, Startups, Intelligence, Strategy, analysis, analytics, Contact"
        />
      </Helmet>
      <AnalyticsSection1 />
      <AnalyticsSection2 />
    </>
  );
}
