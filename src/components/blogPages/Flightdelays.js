import React from "react";
import { Helmet } from "react-helmet";
import "./Autogas.css";
import blog6 from "../../images/flight.png";
import flight1 from "../../images/flight1.png";
import flight2 from "../../images/flight2.png";
import flight3 from "../../images/flight3.png";
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

function Flightdelays() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flight Delays in Nigeria</title>
        <link
          rel="canonical"
          href="https://www.bluesense.co/blog/flightdelays/"
        />
        <meta
          name="description"
          content="Air transportation in Nigeria has been plagued by the frequent occurrence of flight delays which has impacted travellers and the economy negatively...."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, flight, travel, start-up, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on April 14, 2022 | 7 min read</p>
        </div>
        <h1>Flight Delays in Nigeria</h1>
        <img src={blog6} alt="autogas"></img>
      </div>
      <div className="autogas-text">
        <p>
          Air transportation in Nigeria has been plagued by the frequent
          occurrence of flight delays which has impacted travellers and the
          economy negatively. In this research, we examine the issue of flight
          delays in Nigeria as we begin by taking a look at the history of air
          transport in Nigeria as well as some of the causes of flight delays
          and its impact on the Nigerian economy. <br />
          <br />
          <span className="bold">History of Air Transport in Nigeria</span>
          <br />
          Air transportation in Nigeria started during the British colonial
          rule. The first aircraft landed in Kano on November 1, 1925, which
          involved three De Havilland DH9A aircraft belonging to the Royal Air
          Force, RAF. The flight, led by flight Lt. Coningham took off from
          Helwan, Egypt with two stopovers: Sudan, and N’djamena, Chad (which
          was known as Fort Lany then). <br />
          <br />
          Ever since, air transport has evolved from being handled/owned by the
          British to Nigeria having its national carrier (Nigerian Airways), to
          Nigeria having a fleet of domestic and international airlines
          operating daily in the country. However, this system has been plagued
          by recurrent flight delays, mainly affecting domestic flights.
          <br />
          <br />
          <span className="bold">The Nigerian Airways</span>
          <br />
          Nigerian Airways was formed on 23rd August 1958. It was formerly known
          as West African Airways Corporation Nigeria Limited (WAAC Nigeria).
          WAAC as a company was a joint venture between the Nigerian government,
          Elder Dempster lines (Elder Dempster Lines was a UK shipping company
          that traded from 1932 to 2000), and the British Overseas Airways
          Corporation (BOAC). The major shareholder in the company was Nigeria
          with 51% followed by Elder Dempster lines with 33% and BOAC with 16%.
          <br />
          <br />
          On March 25, 1961, Elder Dempster and BOAC sold their shares to the
          Nigerian Government making Nigeria the sole owner of the company.
          Unfortunately, the airline ceased operations in 2003. This was
          speculated to be due to incompetent management, retrogressive union
          activism, staff resistance to change, and corruption among others.
          <br />
          <br />
          <span className="bold">Data on Flight Operations in Nigeria</span>
          <br />
          Nigeria has 32 airports that had 14 million passengers in 2021,
          despite the country having a population of 200 million people. Lagos
          airport alone accounts for 65% of this traffic. In 2021, the total
          number of domestic and international flights operated in Nigeria was
          74,537 and 9,675 respectively.
          <br />
          <br />
          <span className="bold">The Normalisation of Flight Delays</span>
          <br />
          Unfortunately in Nigeria, it has become the norm for domestic carriers
          to have flight delays. In extreme cases, even after lengthy delays,
          flights can be cancelled or shifted to another day, causing discomfort
          and additional cost to travellers. From our research, we think flight
          delays are caused by some of these key reasons:
          <br />
          <br />
          <ul className="numerical-list">
            <li>
              <span className="bold">Shortage of Aviation Fuel Supplies: </span>
              Aeroplanes are fueled with aviation fuel. In Nigeria, aviation
              fuel is both limited and costly, and this can result in flight
              delays. In 2016 there was a fuel shortage that caused some
              international airlines to suspend flights to Nigeria and other
              airlines had to be refuelled in neighbouring countries like Ghana.
              Another occurred in 2016 when the airlines complained about high
              fuel prices at ₦200 per litre which has more than quadrupled to
              over ₦700 per litre in recent times. A resolution was made in 2017
              to give airline operators the licence to import aviation fuel so
              they can bring in cheaper products.
              <br />
              <br />
              The major issue contributing to the high cost of fuel is the high
              foreign exchange rate required to import fuel and the difficulties
              in transporting the fuel to the airports, as the pipeline system
              from the depot to the airport has not been fixed in two decades,
              so trucks have to be used to supply the products. According to
              experts, repairs done on the pipeline from Mosimi/Ejigbo to the
              MMA depot can contribute to a 20% reduction in fuel prices.
            </li>{" "}
            <br />
            <li>
              <span className="bold">
                Lack of Adequate Airport Infrastructure:{" "}
              </span>
              The capacity for check-in at the country’s major airports is far
              less than what is required for on-time performance. Airlines are
              compelled to check-in passengers travelling to a variety of
              destinations from a small number of check-in desks at both the
              Lagos and Abuja domestic terminals, resulting in large waits and
              delays in passenger processing. There is also a need for
              up-to-date technologies in Nigerian Airports. For instance,
              numerous carousels were non-operational during the recent
              Christmas season in popular airports like Lagos and Abuja, slowing
              down the check-in process and causing passengers to wait extended
              periods of time to receive their luggage.
            </li>{" "}
            <br />
            <li>
              <span className="bold">
                Inadequate Technology for Air Traffic Controllers:{" "}
              </span>
              An Aircraft typically waits 5 minutes at the runway’s holding
              point for an aircraft that just took off to reach cruise altitude
              before being allowed to take off. Frequently, particularly at the
              Lagos Airport, a plane about to take off can wait up to 15–20
              minutes before being allowed to take off. These delays accumulate
              and cause further delays.
            </li>
          </ul>
          <br />
          <span className="bold">
            Data on Domestic Flight Delays in 2019-2021
          </span>
          <br />
          According to the annual report published by the Nigerian Civil
          Aviation Authority, 74,537 domestic flights were operated in 2021
          which conveyed 12,050,264 passengers. 41,328 (55%) domestic flights
          were delayed while 542 flights were cancelled. Air peace, Overland,
          Azman, Dana, Max Air, and Arik Airlines had over 55% of their flights
          delayed in Nigeria in 2021.
          <br />
          <br />
          In 2019, 65,401 domestic flights were operated according to the annual
          report published by the Nigerian Civil Aviation Authority. 37,510
          domestic flights were delayed while 356 flights were cancelled.
          <br />
          <br />
          <span className="bold">Domestic Flights Delayed in 2019-2021</span>
          <br /> <br />
          <img className="autogas-text-img" src={flight1} alt="flight"></img>
          <br />
          <br />
          <span className="bold">
            Data on International Flight Delays 2019–2021
          </span>
          <br />
          In 2021, a total of 9,675 international flights were operated
          according to the annual report published by the Nigerian Civil
          Aviation Authority. A total of 3,216 (33%) international flights were
          delayed while 37 flights were cancelled. While in 2019, 15,474
          international flights were operated and a total of 4,880 international
          flights were delayed, while 82 flights were cancelled.
          <br />
          <br />
          <img className="autogas-text-img" src={flight2} alt="flight"></img>
          <br />
          The chart below shows a comparison of the total number of flights that
          were delayed in 2019 and 2021. Domestic flight delays increased from
          37,510 (in 2019) to 41,328 (in 2021), indicating a 10% increase over a
          2 year period. While international flight delays decreased from 4,880
          (in 2019) to 3,216 (in 2021), indicating a 34% decrease over a 2 year
          period.
          <br />
          <br />
          <span className="bold">
            Total Number of Delayed Flights 2019–2021
          </span>
          <img className="autogas-text-img" src={flight3} alt="flight"></img>
          <br />
          <br />
          <span className="bold">Passengers Bill of Rights in Nigeria</span>
          <br />
          The Consumer Protection Regulations were implemented to educate
          airline passengers about the regulations published by the Nigerian
          Civil Aviation Authority (NCAA) for the protection of air travellers’
          rights. The rights are derived from Part 19 of ‘Nigeria’s Civil
          Aviation Regulations 2012, Vol. II.’
          <br />
          <br />
          All airlines, international and domestic, are subject to the
          regulations, which provide basic passenger rights and
          responsibilities, as well as airline obligations.
          <br />
          <br />
          <ul className="numerical-list">
            <li>The right to the full value for your money.</li>
            <li>
              The right to compensation for flight cancellation, delay,
              damaged/lost baggage, and denied boarding for reasons other than
              technical, weather conditions, air traffic control restrictions,
              security risks, and industrial disputes that affect the operations
              of flight.
            </li>
            <li>
              The right to book and confirm tickets with an airline of your
              choice.
            </li>
            <li>
              The right to the provision of a conducive airport environment
              before, during, and after flights.
            </li>
            <li>
              The right to seek redress for all irregularities during your
              flight
            </li>
            <li>
              The right to timely feedback in respect of matters/complaints
              lodged with service providers.
            </li>
            <li>The right to be fully informed about flight status</li>
            <li>
              The right to be treated with respect and dignity irrespective of
              race or physical condition.
            </li>
          </ul>
          <br />
          Under the Civil Aviation Act 2006 (CAA), NCAA Regulations (part 19),
          and the Federal Competition and Consumer Protection Act (FCCPA),
          passengers have certain legal rights when a flight is delayed;
          <br />
          <br />
          <ul>
            <li>
              For 30 minutes: you have the right to know the reason for the
              delay
            </li>
            <li>For 2 hours: you are entitled to refreshment</li>
            <li>
              For 3 hours: you are entitled to a full refund from the airline
            </li>
            <li>
              Between 10 pm — 4 am: you are entitled to transportation and hotel
              accommodation
            </li>
          </ul>
          <br />
          <span className="bold">The Economic Impact of Flight Delays</span>
          <br />A recent study by the International Air Transportation
          Association (IATA) in June 2020 showed that air transportation had a
          significant contribution to the Nigerian economy by providing 241,000
          jobs both directly and indirectly as well as contributing about $1.7
          billion to the Nigerian economy, which is about 0.4% of the GDP.
          <br />
          <br />
          According to the study, Nigeria’s passenger facilitation is at 1.8/10,
          below the African average of 3/10. On the World Economic Forum’s
          Travel and Tourism Competitive Index, Nigeria ranks 69th out of 136
          countries for cost competitiveness and on the Enabling Trade Index,
          Nigeria ranks 127th out of 136 countries globally for the facilitation
          of free flow of goods over the border.
          <br />
          <br />
          A more efficient air transport system will cause an increase in the
          growth of the industry by 124% in the next 20 years with a
          contribution of about $4.7 billion to the GDP and an estimate of about
          555,700 jobs.
          <br />
          <br />
          <span className="bold">Solving Flight Delays in Nigeria</span>
          <br />
          According to industry analysts and engineers, airports in Nigeria do
          not require new runways at the moment, infrastructure upgrades, should
          be accomplished through public-private partnerships via airport
          concessions.
          <br />
          <br />
          The Government could be more proactive in taking action against
          airlines when they default on the regulations. The Federal Airports
          Authority of Nigeria (FAAN) could consider doing more periodic
          maintenance programs on airports and their systems.
          <br />
          <br />
          The necessary regulatory bodies could ensure that flights are
          efficiently scheduled to minimise runway congestion. The Nigerian
          Meteorological Agency and Nigerian Airspace Management Agency could
          also work closer together to ensure that pilots are better briefed on
          weather conditions. Airlines could be obligated to inform passengers
          about flight delays by text message or phone call.
        </p>
      </div>

      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/flightdelays"
          title="Will flightdelays surpass petrol to become the new fuel in Nigeria?"
          hashtags={[
            "Article",
            "Start-ups",
            "Government",
            "BlueSense",
            "flightdelays",
            "Petroleum",
          ]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/flightdelays"
          quote={
            "Air transportation in Nigeria has been plagued by the frequent occurrence of flight delays which has impacted travellers and the economy negatively...."
          }
          hashtag={"Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/flightdelays"
          title={
            "Air transportation in Nigeria has been plagued by the frequent occurrence of flight delays which has impacted travellers and the economy negatively...."
          }
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/flightdelays"
          quote={
            "Air transportation in Nigeria has been plagued by the frequent occurrence of flight delays which has impacted travellers and the economy negatively...."
          }
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Flightdelays;
