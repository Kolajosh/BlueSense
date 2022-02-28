import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog3 from "../../images/6rules.jpg";
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

function SixGuides() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>6 Guides | Blog | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/blog/6guides/" />
        <meta
          name="description"
          content="Raising funds for your startup is not as difficult as you think; because there are more investors out there than there are startups. These six elements will help you convince investors to put their money in your startup?..."
        />
        <meta
          name="keywords"
          content="Business, guides, Consultng, Startups, Intelligence, Strategy, "
        />
      </Helmet>
      <div className="whole">
        <div className="head-img">
          <div className="flex1">
            <p>Published on July 6, 2021 | 5 min read</p>
          </div>
          <h1>6 Guides to Fundraising for your Startup</h1>
          <img src={blog3} alt="Traits"></img>
        </div>
        <div className="blog1-text">
          <p>
            Raising funds for your startup is not as difficult as you think;
            because there are more investors out there than there are startups.
            These six elements will help you convince investors to put their
            money in your startup?
            <br />
            <br /> <span className="bold">Target a particular niche:</span> you
            should devout more time into looking for the right investors as
            opposed to writing to just any investors. If your startup is
            agro-inclined, you should be looking for investors willing to put
            their money in agro-related businesses. Looking for investors who
            are interested in investing in your particular niche is key in
            ensuring you are speaking to the right investors + in-turn, get
            funded.
            <br />
            <br />{" "}
            <span className="bold">
              Build a prototype for demonstration:
            </span>{" "}
            most investors would want to see a prototype before they put their
            money into your startup. Whether it’s an app, product packaging, or
            the product itself, when you’re making a presentation to your
            potential investors, go along with a prototype. A prototype shows
            investors that you have invested time + some of your own resources
            towards building this product - which helps you build credibility.
            <br />
            <br />
            <span className="bold">Have product-market-fit:</span> your business
            idea should have the potential to grow and meet the demands of a
            wider market range. If there is no prospect edge to the business,
            investors would not be too eager to put money into your business.
            Having market appeal / product-market-fit is key to demonstrating
            that you have a viable product that is competitive in the post-COVID
            market.
            <br />
            <br /> <span className="bold">Have an expert team:</span> it’s
            tempting to feel the need to do everything yourself; even if you
            can, it does not give room for improvement. Getting a co-founder who
            shares a similar vision + strategy where both of you are experts in
            your own fields and bring different skills to the table is
            important. This makes you have better chances of getting a yes from
            the investors as you can share the workload and do most of the heavy
            lifting required when starting out.
            <br />
            <br />
            <span className="bold"> Be transparent: </span>one true way to turn
            potential investors into actual investors is to be transparent.
            Chances are that the investors have seen a business plan exactly
            like yours that did not clearly state all the risks or ways to
            counter the risks. Being transparent gives you an edge over others.
            Most investors would rather connect with someone who is true with
            themselves than someone who just acts or pretends to be
            professional.
            <br />
            <br />{" "}
            <span className="bold">
              Have a business plan and financial projection:{" "}
            </span>
            investors are not just people who have a lot of money in their
            accounts; they want to know the answers to questions like: “how do I
            get my money back” and “when do I get it back;” the answer will be
            to develop a business plan that includes financial projections and
            return on investments. A freelance expert can help with the
            projections so that the investors can be sure when and how they will
            be getting the return on their investments.
            <br />
            <br /> Finally - you need to understand what the potential investor
            is interested in, why you may be an attractive opportunity, and what
            sets them (and you) apart from the competition. Here are a few
            things to consider: <br />
            <br />
            <span className="blue">i.</span>&nbsp; Look at which companies
            they’ve backed in the past <br />
            <span className="blue">ii.</span>&nbsp; Can you discern any trends
            in the previous investment decisions? <br />
            <span className="blue">iii.</span>&nbsp; Are they sector agnostic?{" "}
            <br />
            <span className="blue">iv.</span>&nbsp; What’s their average ticket
            size?
            <br />
            <span className="blue">v.</span>&nbsp; Do they co-invest? <br />
            <span className="blue">vi.</span>&nbsp; Are they stage agnostic?
            (pre-Seed, Seed, Series A, etc.) <br />
            <span className="blue">vii.</span>&nbsp; What is the average
            valuation of their portfolio companies? <br />
            <span className="blue">viii.</span>&nbsp; What content are they
            sharing on social media: what are they tweeting and retweeting?
          </p>
        </div>

        <div className="flex2">
          <TwitterShareButton
            url="https://www.bluesense.co/blog/6guides"
            title="6 Guides to Fundraising for your Startup"
            hashtags={["Article", "Startups", "BlueSense"]}
          >
            <TwitterIcon size={25} round={true} fill="#666666" />
          </TwitterShareButton>
          <FacebookShareButton
            url="https://www.bluesense.co/blog/6guides"
            quote={"6 Guides to Fundraising for your Startup"}
            hashtag={"#Article"}
          >
            <FacebookIcon size={25} round={true} fill="#666666" />
          </FacebookShareButton>
          <LinkedinShareButton
            url="https://www.bluesense.co/blog/6guides"
            quote={"6 Guides to Fundraising for your Startup"}
            hashtag={"#Article"}
          >
            <LinkedinIcon size={25} round={true} fill="#666666" />
          </LinkedinShareButton>
          <WhatsappShareButton
            url="https://www.bluesense.co/blog/6guides"
            quote={"6 Guides to Fundraising for your Startup"}
            hashtag={"#Article"}
          >
            <WhatsappIcon size={25} round={true} fill="#666666" />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
}

export default SixGuides;
