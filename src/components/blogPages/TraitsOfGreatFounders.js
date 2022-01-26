import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog1 from "../../images/traits.webp";
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

function TraitsOfGreatFounders() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Traits Of Great Founders | Blog | BlueSense</title>
        <link
          rel="canonical"
          href="//www.bluesense.co/blog/traitsofgoodfounders/"
        />
        <meta
          name="description"
          content="The best companies today, started out with the best founders. The best founders have unique qualities which they have honed overtime. The best founders have a clear vision for the company they run. This is easily the most important of all qualities of a great..."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, founders, Intelligence, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on July 6, 2021</p>
        </div>
        <h1>Traits of great founders</h1>

        <img src={blog1} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          The best companies today, started out with the best founders. The best
          founders have unique qualities which they have honed overtime. The
          best founders have a clear vision for the company they run. This is
          easily the most important of all qualities of a great founder. The
          best founders think clearly about the product/service that the company
          is offering, who the consumers are, why the company is even making the
          product and the future of the product and company. The clearer the
          vision, the easier it is to make plans in the best interest of the
          company. <br />
          <br />
          The second quality of a great founder is the ability to make speedy
          decisive decisions. Founders who look good on paper but fail are often
          missing this one trait. Once the vision for the company is clear,
          making speedy and decisive decisions would not be a problem. The trick
          to being a great founder is your ability to solve any and all problems
          that you are presented with and solving them quickly. It becomes
          easier to hire and fire accordingly. Plans that do not fit into the
          company vision can easily be removed or at least reviewed to fit
          properly into the company’s vision. <br />
          <br />
          The best founders are always determined and passionate about what they
          are doing. As a founder, once you can clearly see the vision for your
          company, it is easy to become aggressively obsessed with your startup
          as you are determined to let the company grow to reach its full
          potential. <br />
          <br />
          The best founders never ignore their users. Users are equally as
          important as the product Itself; without both, there would not be a
          company. The users provide feedback for the product and present new
          angles which you might never have thought about. A great founder
          focuses on the product and gets feedback from its users constantly.
          Focus on product means focusing on love. You need to get the product
          to the point where users would be upset if it went away. <br />
          The best founders conduct a pre-mortem for their company. They think
          about things that could kill the company and tackle those things
          first. The best founders always ask smart people or experts in the
          same field to criticise their ideas then they make their decisions
          from that. <br />
          <br />
          There is no single way to run the perfect startup; great founders
          don’t build great companies overnight. They build great things by
          building a piece at a time. They show up, never give up and do
          whatever it takes to get to that vision that they have set for
          themselves. Great founders are just normal people who see the world a
          certain way, notice there’s a solve missing and go about creating the
          solve to make the world to align with how they see things.
        </p>
      </div>
      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/traitsofgoodfounders"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <TwitterIcon size={25} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/traitsofgoodfounders"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <FacebookIcon size={25} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/traitsofgoodfounders"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/traitsofgoodfounders"
          quote={"Traits of great founders"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default TraitsOfGreatFounders;
