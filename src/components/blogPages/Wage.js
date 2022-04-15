import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import blog1 from "../../images/wage.jpeg";
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

function wage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nigeria’s Minimum Wage</title>
        <link rel="canonical" href="https://www.bluesense.co/blog/wage/" />
        <meta
          name="description"
          content=" Following the country’s independence in October 1960, the Labour
          Union pressed the government to regulate the minimum wage.
          However, it was not until 1978...."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, founders, start-up, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on March 25, 2022 | 4 min read</p>
        </div>
        <h1>Nigeria’s Minimum Wage</h1>
        <img src={blog1} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          Following the country’s independence in October 1960, the Labour Union
          pressed the government to regulate the minimum wage. However, it was
          not until 1978, when Hassan Sunmonu became the NLC’s first president,
          that a structured minimum wage was created for Nigerian employees. In
          1981, he proposed a ₦300-a-month minimum wage. Eventually, President
          Shehu Shagari and the administration led by Hassan Sunmonu agreed to a
          monthly salary of ₦125 after an extensive strike. <br />
          <br />
          Between 1989 and 1990, the NLC engaged in another pay negotiation. As
          a result, in 1991, wages increased from ₦125 to ₦250. In January 1999,
          the minimum wage was increased to ₦3,000 for State workers and ₦3,500
          for Federal workers. This was amended to ₦5,500 for State employees
          and ₦7,500 for Federal employees in 2001, following two years of
          labour discussions with the government. <br />
          <br />
          The National Minimum Wage Act was passed in 2011, raising the minimum
          wage to ₦18,000. In April 2019, the Federal Government increased the
          minimum wage from ₦18,000 to ₦30,000 in response to labour union
          demand.
          <br />
          <br />
          The International Labour Organization (ILO) defines a minimum wage as
          one that guarantees workers (and, in some cases, their families) a
          basic minimum income sufficient to meet their own needs and those of
          their families.
          <br />
          <br />
          In a country where the minimum monthly cost of living is ₦185,814 for
          individuals, according to numbeo.com, Nigeria’s minimum wage does not
          meet the ILO’s definition of an acceptable minimum wage. Additionally,
          at $72 per month, the majority of employees receiving the minimum wage
          will fall significantly below the United Nations’ established poverty
          line of $1.08 per day if they have a household with more than one
          dependent.
          <br />
          <br />
          <span className="bold">MINT</span>
          <br />
          In 2013, economist Jim O’Neill invented the acronym ‘MINT,’ which
          stands for Mexico, Indonesia, Nigeria, and Turkey. Countries on the
          MINT list were selected according to many criteria including economic
          development and demography as well as geography and internet use.
          Nigeria’s minimum wage is lower than its worldwide counterparts, owing
          to economic variables affecting earnings.
          <br />
          <br />
          <span className="bold">Mint Countries</span>
          <br />
          <ul>
            <li>
              Mexico: Mexico had a GDP per capita of $8,346.70 in 2020. The
              National minimum wage per day in Mexico is Mex$172.87 in 2021.
              This is 2.7 times larger than Nigeria’s minimum wage using
              official CBN rates.
            </li>
            <li>
              Indonesia: Indonesia had a GDP per capita of $3,869.59 in 2020.
              The Jakarta region has a minimum wage of $312 per month in 2021.
              This is nearly 4 times Nigeria’s minimum wage.
            </li>
            <li>
              Turkey: Turkey had a GDP per capita of $8,538.17 in 2020. The
              Turkish Government raised its minimum wage by 21.56% as of January
              1, 2021, to $377 a month for single people, which is nearly 5
              times Nigeria’s minimum monthly wage.
            </li>
          </ul>
          <br />
          <br />
          <span className="bold">
            The Minimum Wage in some African + Middle Eastern countries
          </span>
          <br />
          <ul>
            <li>Ghana: The monthly minimum wage in Ghana is $43.44.</li>
            <li>
              Kenya: Kenya’s minimum wage is set by the government by location,
              age, and skillset; the lowest urban minimum wage was $88 per month
              and the lowest agricultural minimum wage for unskilled workers was
              $22.08 per month. Kenya’s minimum wage was last changed on 1 May
              2015.
            </li>
            <li>
              Tanzania: As of July 2013, Tanzania’s minimum wage ranges from $17
              to $172 per month, depending on the sector.
            </li>
            <li>
              Guinea Bissau: Since 2015, every legally employed person has
              received a minimum monthly wage of $30.
            </li>
            <li>
              UAE: The minimum wage in the UAE ranges from $816.77 to $1361.28
              depending on the level of education.
            </li>
          </ul>
          <br />
          <br />
          <span className="bold">
            The Minimum Wage in some Western countries
          </span>
          <br />
          <ul>
            <li>
              Portugal: The minimum wage in Portugal is $701.79 per month for 12
              payments or $601.53 per month for 14 payments.
            </li>
            <li>
              Spain: The minimum wage in Spain is $867.62 per month for 12
              payments and $743.67 per month for 14 payments.
            </li>
            <li>
              Germany: The minimum wage in Germany amounts to $1,466 per month.
            </li>
            <li>
              France: France’s government-mandated minimum wage is $1,6664 per
              month.
            </li>
            <li>
              USA: The federal minimum wage in the USA amounts to $7.25 per
              hour.
            </li>
            <li>
              United Kingdom: The minimum wage in the UK ranges from $5.42 to
              $9.75 per hour depending on the age of the worker.
            </li>
          </ul>
          <br />
          <span className="bold">Economic Impact of Minimum Wages</span>
          <br />
          The issue regarding minimum wage’s unanticipated implications on
          employment stems from fundamental supply and demand: as labour becomes
          more expensive, firms may hire fewer of it. In the basic supply and
          demand model, salaries are equal to the ‘value marginal product of
          labour’ — the value a worker adds to the production of the employer.
          <br />
          <br />
          As the number of people recruited increases, it is expected that this
          marginal product decreases; maintaining all other inputs like
          machinery and materials equal, extra workers will make lower economic
          contributions. Consequently, the demand for labour declines as the
          marginal product decreases. Wages are determined by the supply and
          demand for labour in the market. In this scenario, a
          government-mandated minimum wage that is higher than the market wage
          will result in job losses.
          <br />
          <br />
          Increasing the minimum wage would improve the overall standard of
          living for minimum wage workers, by providing them with a more
          appropriate income level to handle the cost of living. However, this
          may contribute to inflation in two ways; increased expenses for
          companies who would have to increase the price of their products and
          services to cover their increased labour costs, and also increased
          spending by workers due to a rise in the price of goods and services.
          <br />
          <br />
          Minimum wage employees in Nigeria have been exempted from paying
          personal income tax as part of the government’s efforts to boost the
          economy and enhance their standard of living, according to a press
          release. Despite this incentive, recent policies by the government
          such as the increase in VAT from 5% to 7.5% and also shortage + hike
          in price of fuel, subpar and unpredictable power supply, low
          manufacturing and high importation of goods, as well as inflation,
          have further reduced the disposable income of Nigerians.
        </p>
      </div>

      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/wage"
          title="Nigeria’s Minimum Wage - BlueSense Blog"
          hashtags={[
            "Article",
            "Start-ups",
            "BlueSense",
            "NigerianMinimumWage",
          ]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/wage"
          quote={"Nigeria’s Minimum Wage"}
          hashtag={"Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/wage"
          title={"Nigeria’s Minimum Wage"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/wage"
          quote={"Nigeria’s Minimum Wage"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default wage;
