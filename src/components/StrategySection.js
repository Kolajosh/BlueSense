import React from "react";
import "./StrategySection.css";
import strategy from "../images/strategy.png";

function StrategySection() {
  return (
    <>
      <div className="strategy-img">
        <img src={strategy} alt=""></img>
        <div className="button-strategy"></div>
      </div>

      <div className="strategy-container">
        <div className="strategy-head">
          <h1>Strategy</h1>
        </div>
        <div className="strategy1-body-1">
          <p>
            Everyday, the amount of data in the world keeps increasing.{" "}
            <span className="blue">Start-ups</span> can make use of the
            available data and resources to improve overall output by taking
            advantage of our unique skills in building strategy.
          </p>
        </div>
        <div className="strategy1-body-2">
          <p>
            <span className="blue">BlueSense</span> Strategy applies the latest
            analytics tools and state-of-the-art techniques—like machine
            learning, data mining, and sequential pattern analysis—to change the
            way companies interact with customers and to help them optimise
            internal processes. We continue to expand the scope of skills and
            experience it brings to our clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default StrategySection;
