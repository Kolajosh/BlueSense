import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog3 from "../../images/strends.png";
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

function StartupTrends() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Startup Trends | Blog | BlueSense</title>
        <link
          rel="canonical"
          href="https://www.bluesense.co/blog/startuptrends/"
        />
        <meta
          name="description"
          content="In 2020 there was a paradigm shift in businesses and
          entrepreneurship globally with a lot of business closures. 2020
          and 2021 also saw the launch of a multitude of new small
          businesses, globally..."
        />
        <meta
          name="keywords"
          content="Business, startup in lagos, Consultng, Startups, Intelligence, Strategy, "
        />
      </Helmet>
      <div className="whole">
        <div className="head-img">
          <div className="flex1">
            <p>Published on January 28, 2022 | 5 min read</p>
          </div>
          <h1>Startup Trends in 2022</h1>
          <img src={blog3} alt="Traits"></img>
        </div>
        <div className="blog1-text">
          <p>
            In 2020 there was a paradigm shift in businesses and
            entrepreneurship globally with a lot of business closures. 2020 and
            2021 also saw the launch of a multitude of new small businesses,
            globally. Since then, there has been a multitude of trends that have
            developed and are changing the way businesses operate and are
            managed today.
            <br />
            <br /> Here are a few of the Startup trends to look out for in 2022:
            <br />
            <br /> <b>Remote Work</b>: Remote work started out as a necessity in
            2020 due to the Covid-19 pandemic and it has since become a trending
            business model in tech companies and a lot of Start-ups. As of May
            20, 2021, the percentage of paid job postings on LinkedIn offering
            “remote work” has skyrocketed to 357% beyond the earlier year.
            Remote work now accounts for 26.8% of all paid job listings. It
            would appear that what started as a necessary evil has now become a
            high demand business trend with job seekers opting for remote jobs.
            This is a trend we certainly will continue to see more of in 2022
            and quite possibly after.
            <br />
            <br />
            <b>Digitisation/Virtualisation of Business</b>: Not unrelated to
            remote work is the digitisation of businesses. This covers the use
            of artificial intelligence heavily in businesses as well as the lean
            toward digital currency and virtual recruitment and onboarding
            processes.
            <br />
            Artificial intelligence may be unable to tackle common sense tasks
            but it is able to analyse and process data far more quickly than the
            human brain. It is able to deliver the right information to the
            right customer, aids in scheming out the consequences of each action
            and generally helps to streamline the decision making process.
            <br />
            <br />
            “Digital currency is not a new phenomenon in the business world but
            2020 and 2021 brought about more global reliance on cryptocurrency
            with quite a large number of the global population now making
            investments and savings in cryptocurrency as well as financial
            transactions. 2022 will not be any different as more businesses will
            need to deal in crypto in the form of transactions but primarily
            having it as an accepted mode of payment.”
            <br />
            <br /> <b>Increased Online Presence</b>: Every company or firm today
            is striving to establish social media presence of some sort, by
            creating a presence on apps like LinkedIn, Instagram and Twitter
            companies seek to partake in the digital boom. Several companies now
            employ people to operate in such capacities with roles like social
            media managers, Digital media strategists, content writers and
            creators. Essentially globalization is causing every company in the
            world to adapt to the changing times. out.
            <br />
            <br /> <b>Talent Priotisation</b>: In the startup space there is an
            increasing demand for fresh talent. Hence skill is top priority.
            With the introduction of online courses and certifications, people
            are able to learn and specialise in several areas such as data
            analysis, cyber security etc without necessarily having degrees in
            those areas. Essentially the question is no longer ‘Do you have a
            degree in this area?’ But now ‘How skilled are you at it?’ By being
            inclusive and not rigid in recruitment processes, startups allow for
            people with actual talent and passion to gain the necessary
            opportunities.
            <br />
            <br /> <b>Diversity and Inclusion Hiring</b>: “Inclusion” is a term
            that has been floating around in every form of media since 2019,
            inclusion of races, genders, sexual orientations and identities and
            ethnicities. This has been and still is an ongoing conversation and
            trend in the business world. Now more than ever, business are being
            intentional about inclusivity and diversity with companies setting
            up roles specifically for women and ensuring racial and ethnic
            diversity in their recruitment processes. This is a trend that we
            will probably be seeing more of in 2022.
            <br />
            <br />
          </p>
        </div>

        <div className="flex2">
          <TwitterShareButton
            url="https://www.bluesense.co/blog/startuptrends"
            title="Startup Trends in 2022"
            hashtags={["Article", "Startups", "BlueSense"]}
          >
            <TwitterIcon size={25} round={true} fill="#666666" />
          </TwitterShareButton>
          <FacebookShareButton
            url="https://www.bluesense.co/blog/startuptrends"
            quote={"Startup Trends in 2022"}
            hashtag={"#Article"}
          >
            <FacebookIcon size={25} round={true} fill="#666666" />
          </FacebookShareButton>
          <LinkedinShareButton
            url="https://www.bluesense.co/blog/startuptrends"
            quote={"Startup Trends in 2022"}
            hashtag={"#Article"}
          >
            <LinkedinIcon size={25} round={true} fill="#666666" />
          </LinkedinShareButton>
          <WhatsappShareButton
            url="https://www.bluesense.co/blog/startuptrends"
            quote={"Startup Trends in 2022"}
            hashtag={"#Article"}
          >
            <WhatsappIcon size={25} round={true} fill="#666666" />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
}

export default StartupTrends;
