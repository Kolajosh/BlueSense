import React from "react";
import "./TraitsOfGreatFounders.css";
import blog2 from "../../images/blog2.png";
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

function TraitsOfGreatFounders() {
  return (
    <>
      <div className="head-img">
        <img src={blog2} alt="Traits"></img>
        <h1>Why Competition is futile for your Startup</h1>
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
      <div className="share-buttons">
        <h3>Share</h3>
        <FacebookShareButton
          url="https://www.bluesense.co/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <FacebookIcon size={35} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url="https://www.bluesense.co/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={35} round={true} />
        </WhatsappShareButton>

        <TwitterShareButton
          url="https://www.bluesense.co/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <TwitterIcon size={35} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={35} round={true} />
        </LinkedinShareButton>

        <TelegramShareButton
          url="https://www.bluesense.co/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <TelegramIcon size={35} round={true} />
        </TelegramShareButton>

        <EmailShareButton
          url="https://www.bluesense.co/whycompetition"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <EmailIcon size={35} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
}

export default TraitsOfGreatFounders;