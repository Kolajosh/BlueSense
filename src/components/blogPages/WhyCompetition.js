import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog2 from "../../images/whycomp.jpg";
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

function WhyCompetition() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Why Competition is futile for Startups | Blog | BlueSense</title>
        <link
          rel="canonical"
          href="https://www.bluesense.co/blog/whycompetition/"
        />
        <meta
          name="description"
          content="You should never start a startup in a massive or over-saturated market. You want to create a unique product and start with a small niche before scaling. Large and existing markets usually mean that you have tons of competition..."
        />
        <meta
          name="keywords"
          content="bluesense blog, competition, Business, Consultng, founders, Intelligence, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on July 6, 2021 | 2 min read</p>
        </div>
        <h1>Why Competition is futile for your Startup</h1>

        <img src={blog2} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          You should never start a startup in a massive or over-saturated
          market. You want to create a unique product and start with a small
          niche before scaling. Large and existing markets usually mean that you
          have tons of competition. It will be very difficult if not impossible
          to differentiate your product from other similar products/services.
          <br />
          <br />
          Your focus should be on creating that unique product or service. You
          want to be a one-of-a-kind company where it is the only one in the
          small ecosystem. You do not want to be the 10,000th makeup artist or
          the 10th photographer on your street.
          <br />
          <br />
          Go after small markets that people don't even think exist, then scale
          and turn it into a monopoly business. You can get a foothold quickly
          and become a force to be reckoned with in the future.
          <br />
          <br />
          As a startup founder, you shouldn't willingly go out looking for risks
          to take on; such as getting into a saturated market. Take competition
          as a form of validation; when we go for things that a lot of other
          people are going for, is a futile risk in itself. When lots of people
          are doing one thing, it is often proof of insanity and it would be
          difficult to stand out.
          <br />
          <br />
          Going for a competitive market stunt your company's growth. The
          company may scale well at the beginning but growth soon stops as
          industry giants monopolize the business. Starting first has its
          advantages but you must always have the future in mind.
        </p>
      </div>

      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <TwitterIcon size={25} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <FacebookIcon size={25} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default WhyCompetition;
