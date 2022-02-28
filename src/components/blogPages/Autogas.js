import React from "react";
import { Helmet } from "react-helmet";
import "./Autogas.css";
import blog6 from "../../images/ag.jpg";
import autogas2 from "../../images/autogas2.png";
import autogas1 from "../../images/autogas1.png";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function Autogas() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Will autogas surpass petrol to become the new fuel in Nigeria?
        </title>
        <link rel="canonical" href="https://www.bluesense.co/blog/autogas/" />
        <meta
          name="description"
          content="The Nigerian government is pushing for the use of autogas as an alternative source of fuel in the country. This article shares the recent investment and incentives in the gas sector by the government and how this will affect..."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, autogas, petroleum, start-up, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on February 9, 2022 | 5 min read</p>
        </div>
        <h1>Will autogas surpass petrol to become the new fuel in Nigeria?</h1>
        <img src={blog6} alt="autogas"></img>
      </div>
      <div className="autogas-text">
        <p>
          Nigeria began producing oil and gas in 1958 when the country's first
          oil discovery well was dug at Oloibiri (present-day Bayelsa State,
          Niger Delta Region). Gas output began to expand significantly in the
          early 1970s, eventually exceeding 2.7 billion cubic feet per day
          (bscf/d) in 1979. <br />
          <br />
          Nigeria has the 9th largest gas reserve size in the world which holds
          206 trillion cubic feet of gas as of 2021 and is also the largest in
          Africa. Nigeria also contributes about 3% of natural gas to the global
          reserve and 36% to Africa’s reserve. Nigeria currently exports 929,844
          million cubic Ft of gas annually.. <br />
          <br />
          <img className="autogas-text-img" src={autogas2} alt="autogas"></img>
          <br />
          <br />
          <img className="autogas-text-img" src={autogas1} alt="autogas"></img>
          <br />
          <br />
          The enactment of the Petroleum Industry Act to remove subsidy on PMS
          (Premium Motor Spirit) and also the recent approval of the National
          Gas Policy made it imperative for the Government to find a sustainable
          alternative to PMS. To minimise the impact of fuel subsidy removal on
          the masses, the Federal Government unveiled the 2022 framework for the
          deployment of CNG (Compressed Natural Gas), popularly called autogas
          in Nigeria.
          <br />
          <br />
          CNG was selected to be the fuel of choice amongst others such as LPG
          and LNG due to its comparative advantage regarding ease of deployment,
          comparatively lower capital requirements commodity’s supply stability,
          and local market commercial structure which predominantly relies on
          the Naira.
          <br />
          <br />
          To support the introduction of autogas into the Nigerian
          market/filling stations, the government provided incentives to gas
          utilisation companies who manufacture, market and distribute natural
          gas for commercial purposes. This includes:
          <br />
          <br />
          <ul>
            <li>Initial tax-free period of 3year</li>
            <li>
              Additional tax-free period of 2years (renewable based on
              satisfactory performance)
            </li>
            <li>Tax-free dividends, during the tax-free timelines</li>
            <li>0% VAT for investments in plants, machinery, and equipment</li>
          </ul>
          <br />
          The Federal Government also introduced a ₦250Billion intervention fund
          provided by the Central Bank of Nigeria to actualise the conversion
          process of vehicles and petrol stations from petrol to autogas. This
          loan will be used by oil marketers to convert over 7,000 retail
          outlets/filling stations to autogas stations to encourage the use of
          gas in vehicles.
          <br />
          <br />
          The government will also provide 50% of the conversion kits to
          fast-track the process and also meet their target of converting
          200,000 commercial vehicles to run on gas this year.
          <br />
          <br />
          The Lagos State Government is also collaborating with the Federal
          Government to develop autogas filling stations in the State through
          the inauguration of the Ibile Oil & Gas Corporation Gas Plant in
          Ikorodu, Lagos.
          <br />
          <br />
          <span className="bold">
            How will the use of autogas affect businesses in Nigeria?
          </span>
          <br />
          <br />
          Gas-based industries, especially petrochemicals such as fertilizer and
          methanol would also develop rapidly to support large industries like
          agriculture. This will help foster investment from the private sector;
          which will then be encouraged to invest in the domestic gas market.
          Which should in turn foster more employment opportunities. <br />
          <br />
          This will also be economical for the government as a result of the
          abundance of gas. When local industries and vehicles are converted to
          autogas, there will be less demand for petrol, so the government can
          export more oil and import less refined petroleum products.
          <br />
          <br />
          The utilisation of gas will enable oil companies to stop gas flaring.
          As a result, they will no longer pay gas flaring penalties/fines to
          the government thereby reducing their cost of production. Also, oil
          and gas industries such as Nigerian Liquified Natural Gas (NLNG) will
          experience expansion in operation leading to an increase in revenue
          and employment opportunities.
          <br />
          <br />
          "While the government must provide certain incentives and investments
          to increase gas utilisation in Nigeria, the government still needs to
          invest in new pipelines and other gas processing and storage
          infrastructures."
        </p>
      </div>

      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/autogas"
          title="Will autogas surpass petrol to become the new fuel in Nigeria?"
          hashtags={[
            "Article",
            "Start-ups",
            "Government",
            "BlueSense",
            "Autogas",
            "Petroleum",
          ]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/autogas"
          quote={
            "Will autogas surpass petrol to become the new fuel in Nigeria?"
          }
          hashtag={"Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/autogas"
          title={
            "Will autogas surpass petrol to become the new fuel in Nigeria?"
          }
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/autogas"
          quote={
            "Will autogas surpass petrol to become the new fuel in Nigeria?"
          }
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Autogas;
