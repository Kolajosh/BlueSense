import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog1 from "../../images/nsb1.jpeg";
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

function Nsb() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nigerian Start-up Bill</title>
        <link rel="canonical" href="https://www.bluesense.co/blog/nsb/" />
        <meta
          name="description"
          content="April 2018 saw Tunisia becoming the first African country to pass a Start-up act, this act took effect in October 2018 and essentially sough..."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, founders, start-up, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on January 21, 2022 | 4 min read</p>
        </div>
        <h1>The Nigerian Start-up Bill</h1>
        <img src={blog1} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          April 2018 saw Tunisia becoming the first African country to pass a
          Start-up act, this act took effect in October 2018 and essentially
          sought to provide a clear legal framework as well as support for
          Start-ups within the country. Following the passage of the bill, there
          have been a host of other African countries like Senegal, Kenya,
          Algeria, etc that have passed or are in the process of passing their
          unique start-up laws. In 2021, Nigeria joined this league of countries
          with the proposed Nigerian Start-up Bill (NSB) <br />
          <br />
          The Nigerian Start-up Bill is a collaborative effort of the Nigerian
          Tech Start-up Ecosystem and the Presidency primarily aimed at creating
          a favourable business environment for Start-ups in Nigeria by creating
          a regulatory framework for Start-ups. <br />
          <br />
          The bill stipulates the specific criteria that will qualify companies
          as Start-ups, the first of which is ‘Innovation.’ Start-ups according
          to the bill are companies registered as Innovation Driven
          Entrepreneurship (IDEs). Innovative in this case would include such
          things as the production and improvement of innovative products as
          well as commercialization of such products. The bill also stipulates
          that Start-ups should involve new tech or be enabled by technology.
          <br />
          <br />
          The bill specifies that the company should be incorporated in Nigeria
          and have existed for not more than ten years. Its headquarters must be
          located in Nigeria as well. Such a company should have at least 51% of
          its shares held by Nigerians. Companies with foreign participation
          exceeding 49% are still eligible as long as the ultimate beneficial
          owners are Nigerians. The Start-up should have a total of less than
          100 direct employees, of course excluding casual workers, consultants,
          and outsourced staff having at least 15% of their expenses going into
          research and development activities.
          <br />
          <br />
          There are certain incentives available to Start-ups registered under
          the bill which are believed to be advantageous, they are as follows;{" "}
          <br />
          <br />
          <ul>
            <li>
              Tax Relief: The bill purports to offer a tax exemption on the
              profit of Start-ups for 7 years as well as a reduced Value-Added
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
          brings about cordiality between regulators and Start-ups and will be
          friendly to the tech ecosystem.
        </p>
      </div>

      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/nsb"
          title="The Nigerian Start-up Bill - BlueSense Blog"
          hashtags={[
            "Article",
            "Start-ups",
            "BlueSense",
            "NigerianStartupBill",
          ]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/nsb"
          quote={"The Nigerian Start-up Bill"}
          hashtag={"Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/nsb"
          title={"The Nigerian Start-up Bill"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/nsb"
          quote={"The Nigerian Start-up Bill"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Nsb;
