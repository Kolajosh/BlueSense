import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog1 from "../../images/fintech.jpeg";
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

function Fintech() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nigeria’s fintech + Financial Inclusion | Blog | BlueSense
        </title>
        <link rel="canonical" href="//www.bluesense.co/blog/fintech/" />
        <meta
          name="description"
          content="Financial technology or fintech is an innovative endeavour through technology that seeks to deliver financial services through software as opposed to traditional financial institutions. By developing e-payments and transfers banking has become more accessible to everyone especially SMEs and the low income populace. Accessible in this case would refer to being able to perform transactions without having to go to the bank but also being able to perform transactions with less cost...."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, founders, fintech, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on March 21, 2022 | 4 min read</p>
        </div>
        <h1>Nigeria’s fintech + Financial Inclusion</h1>

        <img src={blog1} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          Financial technology or fintech is an innovative endeavour through
          technology that seeks to deliver financial services through software
          as opposed to traditional financial institutions. By developing
          e-payments and transfers banking has become more accessible to
          everyone especially SMEs and the low income populace. Accessible in
          this case would refer to being able to perform transactions without
          having to go to the bank but also being able to perform transactions
          with less cost. <br />
          <br />
          Fintech and innovation have greatly contributed to the promotion of
          financial inclusion. Between 2011 and 2014, the number of adult
          account holders in the world increased by 700 million and the unbanked
          population fell by 20%. In Nigeria, financial inclusion rates went up
          to 64.1% in 2020 from 54.8% in 2016. Financial technology in Nigeria
          has grown significantly since 2016 with the launch of platforms like
          Paystack, Flutterwave, PiggyVest, Bamboo etc and digital banks like
          Kuda. The financial technology space in Nigeria can be described as a
          booming sector and a particularly competitive one with over 200
          companies in the system. These companies offer several financial
          services like loans, capital for SMEs, investment options and ease of
          payments.
          <br />
          <br />
          Poor financial inclusion in Nigeria is due to certain factors:
          <br />
          <ul>
            <li>Low levels of formal employment</li>
            <li>Very few credit information services</li>
            <li>Financial illiteracy</li>
            <li>Strict documentation requirements to open bank accounts</li>
            <li>Low financial product penetration</li>
          </ul>
          <br />
          The conversation of financial inclusion gained more prominence as the
          fintech sector grew. However, financial exclusion is still a problem.
          According to Enhancing Financial Innovation & Access (EFINA), 35.9% of
          Nigerians are financially excluded. This figure is a significant one
          given the large Nigerian population of over 200million. This figure
          has since increased to 38.1% in 2020. This is because the population
          is growing faster than financial inclusion is. <br />
          <br />
          In 2012, the Central Bank of Nigeria (CBN) adopted a Financial
          Inclusion Strategy built on four strategic areas which are; agency
          banking, mobile banking/payments, linkage models and client
          empowerment. Formal banks in Nigeria have however underperformed.
          Traditional banks in Nigeria are focused on the formal sector. While
          93% of Nigerians employed in the formal sector have a formal bank
          account and only 59% in the informal sector with only 26% of farmers
          having bank accounts.
          <br />
          <br />
          According to EFINA, bank growth has shot up by the use of digital
          financial services. From 2018 to 2020, payments have seen a 13% gain,
          the highest recorded amongst digital services provided.
          <br />
          <br />
          Regardless of this growth, only 28% of Nigerians have made payments
          using digital means. To give context to this, out of 106 million
          Nigerian adults, only 28% actively use digital financial services.
          <br />
          <br />
          McKinsey reports that Nigerian fintech has raised over $600 million in
          funding. In 2019 alone Nigerian fintech accounts for about 25% of the
          $491.6 million raised by fintechs in Africa. A survey by Ernest &
          Young reported that 57% of fintech in Nigeria generate revenues of
          over $5 million annually. Fintechs in Nigeria are gaining relevance
          especially as they begin to offer better saving and investment
          options. An application like Piggyvest for example offers up to 13%
          interest on your savings.
          <br />
          <br />
          According to a survey by the Human Sciences Research Council (HSRC),
          76% of low-income consumers indicated that high transaction fees are
          major drivers of financial exclusion. Fintech platforms are being used
          to accelerate the process towards digital solutions in countries such
          as Ghana, and Kenya where the governments have lowered transaction
          fees and increased transaction limits to encourage consumers to use
          them. As a fintech solution, mobile wallets have provided a great
          opportunity to reduce the cost of remittances across the entire
          continent. In order to continue to bring financial products to users
          while addressing concerns from potential consumers, new fintech
          solutions are developed every year.
          <br />
          <br />
          Fintech solutions have definitely changed the pace at which financial
          inclusion was taking place in Africa, resulting in extremely positive
          changes, but there is so much to be done. The CBN’s Payment Service
          Banks (PSB) guidelines are stifling competition in the finance
          industry.
          <br />
          <br />
          CBN has stated in the past that Nigeria can also reach a significant
          increase in mobile money penetration if it opens the field to more
          players, particularly non-banks that can offer payments and other
          financial services, while regulating healthy competition; it is then
          puzzling, why it does not allow fintech to offer credit, deposits, and
          other banking services to more Nigerians to increase financial
          inclusion. Hopefully, fintech can be applied to the areas of the
          economy that would create change and positively impact financial
          inclusion.
        </p>
      </div>
      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/fintech"
          title="Nigeria’s fintech + Financial Inclusion"
          hashtags={["Article", "Start-ups", "BlueSense"]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/fintech"
          quote={"Nigeria’s fintech + Financial Inclusion"}
          hashtag={"#Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/fintech"
          quote={"Nigeria’s fintech + Financial Inclusion"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/fintech"
          quote={"Nigeria’s fintech + Financial Inclusion"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Fintech;
