import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog1 from "../../images/nsb1.jpeg";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function Nsb() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nigerian Startup Bill</title>
        <link rel="canonical" href="//www.bluesense.co/nsb/" />
        <meta
          name="description"
          content="April 2018 saw Tunisia becoming the first African country to pass a Startup act, this act took effect in October 2018 and essentially sough..."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, founders, startup, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <h1>The Nigerian Start-up Bill</h1>
        <div className="subflex-title">
          <div className="flex1">
            <p>Published on January 21, 2022</p>
          </div>
          <div className="flex2">
            <FacebookShareButton
              url="https://www.bluesense.co/nsb"
              quote={"The Nigerian Start-up Bill"}
              hashtag={"#Article"}
            >
              <FacebookIcon size={25} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton
              url="https://www.bluesense.co/nsb"
              quote={"The Nigerian Start-up Bill"}
              hashtag={"#Article"}
            >
              <WhatsappIcon size={25} round={true} />
            </WhatsappShareButton>

            <TwitterShareButton
              url="https://www.bluesense.co/nsb"
              quote={"The Nigerian Start-up Bill"}
              hashtag={"#Article"}
            >
              <TwitterIcon size={25} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton
              url="https://www.bluesense.co/nsb"
              quote={"The Nigerian Start-up Bill"}
              hashtag={"#Article"}
            >
              <LinkedinIcon size={25} round={true} />
            </LinkedinShareButton>

            <TelegramShareButton
              url="https://www.bluesense.co/nsb"
              quote={"The Nigerian Start-up Bill"}
              hashtag={"#Article"}
            >
              <TelegramIcon size={25} round={true} />
            </TelegramShareButton>

            <EmailShareButton
              url="https://www.bluesense.co/nsb"
              quote={"The Nigerian Start-up Bill"}
              hashtag={"#Article"}
            >
              <EmailIcon size={25} round={true} />
            </EmailShareButton>
          </div>
        </div>
        <img src={blog1} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          April 2018 saw Tunisia becoming the first African country to pass a
          Startup act, this act took effect in October 2018 and essentially
          sought to provide a clear legal framework as well as support for
          Startups within the country. Following the passage of the bill, there
          have been a host of other African countries like Senegal, Kenya,
          Algeria, etc that have passed or are in the process of passing their
          unique start-up laws. In 2021, Nigeria joined this league of countries
          with the proposed Nigerian Start-up Bill (NSB) <br />
          <br />
          The Nigerian Start-up Bill is a collaborative effort of the Nigerian
          Tech Startup Ecosystem and the Presidency primarily aimed at creating
          a favourable business environment for Start-ups in Nigeria by creating
          a regulatory framework for Start-ups. <br />
          <br />
          The bill stipulates the specific criteria that will qualify companies
          as Startups, the first of which is ‘Innovation.’ Start-ups according
          to the bill are companies registered as Innovation Driven
          Entrepreneurship (IDEs). Innovative in this case would include such
          things as the production and improvement of innovative products as
          well as commercialization of such products.
          <br />
          <br />
          There are certain incentives available to Startups registered under
          the bill which are believed to be advantageous, they are as follows;{" "}
          <br />
          <br />
          <ul>
            <li>
              Tax Relief: The bill purports to offer a tax exemption on the
              profit of Startups for 7 years as well as a reduced Value-Added
              Tax of 3% on goods and services provided by Start-ups.
            </li>
            <li>
              Funding: The bill proposes a Start-up -investment seed fund to
              support start-ups at the early stages.
            </li>
            <li>
              Regulatory bodies: The relevant regulatory bodies such as CBN, the
              CAC, and the registry concerned with Intellectual Property are
              made more accessible by setting up help desks at the OSCC as well
              as providing support through the OSSC portal.
            </li>
            <li>
              Licensing: The bill offers the expedition of license application
              processes to fintech Start-up. Start-ups will also be offered
              grant discounts on their licensing and registration fees.
            </li>
          </ul>
          <br />
          “There are of course doubts and questions as to the effectiveness of
          the incentives offered by the bill as well as the government’s plan
          for the smooth execution of these incentives. However, the bill is in
          review and is yet to be passed hence its effectiveness or otherwise is
          yet to be seen.”
          <br />
          <br />
          While the bill is yet to be passed, it has received nationwide
          recognition and has been welcomed by the people as a step in the right
          direction for the nation and economy. It is hoped that this bill
          brings about cordiality between regulators and Startups and will be
          friendly to the tech ecosystem.
        </p>
      </div>
    </>
  );
}

export default Nsb;
