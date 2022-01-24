import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";

import StrategySection from "../StrategySection";
import StrategySection2 from "../StrategySection2";

export default function Strategy() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Strategy | Core | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/strategy" />
        <meta
          name="description"
          content="BlueSense Strategy applies the latest analytics tools and state-of-the-art techniques—like machine learning, data mining, and sequential pattern analysis—to change the way companies interact with customers and to help them optimise internal processes. We continue to expand the scope of skills and experience it brings to our clients. "
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, Intelligence, Strategy, Consult, Contact, critical, business, planning"
        />
      </Helmet>
      <StrategySection />
      <StrategySection2 />
    </>
  );
}
