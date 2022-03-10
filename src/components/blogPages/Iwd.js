import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import iwd from "../../images/iwd.jpeg";
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

function Iwd() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          #Breakthebias: Everything you need to know about International Women’s
          Day and the theme for 2022{" "}
        </title>
        <link rel="canonical" href="https://www.bluesense.co/blog/iwd/" />
        <meta
          name="description"
          content="International Women’s Day is marked annually on March 8 and honours women worldwide for their ‘social, economic, cultural, and political achievements’ according to the International Women’s Day website. Additionally, the day encourages action to enhance gender equality...."
        />
        <meta
          name="keywords"
          content="bluesense blog, women, iwd, International Womens Day,  Business, Consultng, founders, Intelligence, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on March 8, 2022 | 2 min read</p>
        </div>
        <h1>
          #Breakthebias: Everything you need to know about International Women’s
          Day and the theme for 2022{" "}
        </h1>

        <img src={iwd} alt="Iwd"></img>
      </div>
      <div className="blog1-text">
        <p>
          International Women’s Day is marked annually on March 8 and honours
          women worldwide for their ‘social, economic, cultural, and political
          achievements’ according to the International Women’s Day website.
          Additionally, the day encourages action to enhance gender equality.
          <br />
          <br />
          On this day, women are celebrated all over the world irrespective of
          race, status, and age. This year, the theme for the international
          women’s day celebration is to ‘break the bias.’ The theme implies
          forging an inclusive world that is free of bias, stereotypes, and
          discrimination. This calls for individual and collective action to
          break bias towards women in our communities, workplaces, schools,
          colleges, and universities and also provide a level playing field for
          women .#breakthebias #IWD2022
          <br />
          <br />
          <span className="bold">IWD History</span>
          <br />
          <br />
          In the early 1990s, the women’s rights movement in industrialising
          countries led to the creation of International Women’s Day. The notion
          of an International Women’s Day was suggested and endorsed in 1910
          during the second International Conference of Working Women, a meeting
          of women from activist and political groups in Copenhagen, Denmark.
          The next year, on March 19, 1911, various European nations honoured
          the day for the first time. Rallies and activities were held to
          advocate for women’s voting rights and an end to gender
          discrimination.
          <br />
          <br />
          Since 1914, the date of International Women’s Day has been fixed at
          May 8, in order to coincide with Russian women, who celebrate the day
          on February 23 on the Gregorian calendar. International Women’s Day
          was originally acknowledged by the United Nations in 1975.
          <br />
          <br />
          <span className="bold">IWD Colors</span>
          <br />
          <br />
          According to the International Women’s Day website, purple, along with
          green and white, are regarded as the International Women’s Day
          colours. These colours date all the way back to the early 1900s in the
          United Kingdom’s Women Social and Political Union.
          <br />
          <br />
          <span className="bold">IWD Celebration</span>
          <br />
          <br />
          International Women’s Day can be observed in a variety of ways. These
          can include festivals, art exhibitions, and award ceremonies organised
          by governmental, non-governmental, and corporate organisations.
        </p>
      </div>

      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/iwd"
          title="#Breakthebias: Everything you need to know about International Women’s Day and the theme for 2022"
          hashtags={["Article", "Women", "iwd", "BreakTheBias", "BlueSense"]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/iwd"
          quote={
            "#Breakthebias: Everything you need to know about International Women’s Day and the theme for 2022"
          }
          hashtag={"#Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/iwd"
          quote={
            "#Breakthebias: Everything you need to know about International Women’s Day and the theme for 2022"
          }
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/iwd"
          quote={
            "#Breakthebias: Everything you need to know about International Women’s Day and the theme for 2022"
          }
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Iwd;
