import React from "react";
import { Helmet } from "react-helmet";
import "./TraitsOfGreatFounders.css";
import oilcompanies from "../../images/oilcompanies.jpeg";
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

function InternationalOilCompanies() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Why International Oil Companies are Divesting from Nigeria | Blog |
          BlueSense
        </title>
        <link rel="canonical" href="//www.bluesense.co/blog/IOC/" />
        <meta
          name="description"
          content="Chevron intends to sell some of its Nigerian oil fields as part of
          a global effort to restructure its portfolio and focus on boosting
          its shale production in the United States. The..."
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, oil, start-ups, invest, divest, fuel, gas, Intelligence, Blog, Articles"
        />
      </Helmet>
      <div className="head-img">
        <div className="flex1">
          <p>Published on March 2, 2022 | 3 min read</p>
        </div>
        <h1>Why International Oil Companies are Divesting from Nigeria</h1>

        <img src={oilcompanies} alt="Traits"></img>
      </div>
      <div className="blog1-text">
        <p>
          Ever since oil was discovered in Nigeria, Nigeria saw international
          oil companies coming into the country to set up branches for crude oil
          exploration which served as a source of revenue for the government and
          also boosted their economy. However, over the last few years,
          international oil companies are gradually divesting from Nigeria.{" "}
          <br />
          <br />
          Chevron intends to sell some of its Nigerian oil fields as part of a
          global effort to restructure its portfolio and focus on boosting its
          shale production in the United States. The business, which is
          Nigeria's third-largest oil producer, is seeking buyers for some of
          its onshore and shallow offshore assets. Chevron is apparently in
          direct contact with possible purchasers and does not intend to conduct
          a bidding procedure for the assets. Chevron auctioned around 40% of
          its ownership in selected infrastructure in 2013 to improve capital
          efficiency and provide prospective purchasers with the opportunity to
          build their assets. <br />
          <br />
          For more than a decade, Shell has progressively sold its onshore
          assets to avoid issues, like pollution caused by damaged pipelines and
          the ensuing legal fights with local communities, etcetera. The issues
          became urgent in 2020 when Shell announced its intention to transition
          into a clean energy Behemoth and progressively phase down its oil and
          gas operations to reach net-zero carbon emissions by 2050.
          Additionally, a Hague court ordered Royal Dutch Shell to decrease its
          worldwide emissions by 45 percent by the end of 2030, compared to 2019
          levels in a landmark case brought by Friends of the Earth and over
          17,000 co-plaintiffs.
          <br />
          <br />
          Notably, ExxonMobil sold its stake in the Joint Venture shallow-water
          project with NNPC to Seplat Energy but reaffirmed its commitment to
          continued investment in Nigeria. British Gas divested its Nigerian oil
          holdings, while Brazilian oil company Petrobras informed Nigeria that
          it will sell its 8% ownership in the Agbami block and 20% in the
          offshore Akpo project for ₦795 billion. Total Energies divested its
          20% ownership in the Niger Delta's Usan field. ConocoPhillips also
          sold its onshore assets and exited Nigeria following the completion of
          the $1.5 billion sales of its oil assets to Oando. <br />
          <br />
          Since 1998, 100 companies have accounted for more than 70% of global
          greenhouse gas emissions, according to research issued by the Carbon
          Disclosure Project (CDP), which sheds light on the role of businesses
          and investors in addressing climate change. ExxonMobil, Shell, BP, and
          Chevron have been classified as the top-emitting investor-owned firms.
          ExxonMobil is rated fifth with 1.98 percent of global industrial GHG
          emissions, Royal Dutch Shell is ninth with 1.67 percent, and Chevron
          is placed twelve with 1.31 percent of global industrial GHG emissions.
          <br />
          <br />
          There has been considerable pressure on oil companies to transition to
          green energy. In Europe, investors, stakeholders, and activists
          successfully compelled several MNCs to pull back crude drilling
          through litigation, lobbying, and protests.
          <br />
          <br />
          The 'green shift' and corporate repositioning have compelled oil
          corporations to rethink their investment objectives in several
          nations, including Nigeria. Nigeria has been a long-time opponent of
          oil reforms, so the IOCs saw the country as anti-futuristic, which led
          to more talk about a gradual withdrawal from the country's crude
          exploration business.
          <br />
          This has led to the acquisition of IOCs assets by indigenous companies
          in Nigeria such as Seplat Energy, TNOG Oil and Gas Ltd, MRS Holdings,
          and Conoil Plc. This recent initiative would force local Nigerian oil
          companies to significantly increase their production capacity and
          financial muscle to become more engaged in the sector. <br />
          <br />
          However, there has been scepticism about indigenous companies' ability
          to take over onshore assets from IOCs in light of ongoing divestment
          issues. Aside from existing issues of vandalism and theft, legal
          battles, ageing infrastructure and ongoing battles over general clean
          up and compensation for oil and gas producing communities are among
          the top challenges that could make or break the majority of indigenous
          companies.
          <br />
          <br />
          While the purchase of IOCs infrastructure by local oil companies is
          the right step, which could increase production capacity, it begs the
          question of why local oil companies are focused on infrastructure,
          rather than developing green energy in Nigeria.
        </p>
      </div>
      <div className="flex2">
        <TwitterShareButton
          url="https://www.bluesense.co/blog/IOC"
          title="Why International Oil Companies are Divesting from Nigeria"
          hashtags={["Article", "OilCompanies", "invest", "BlueSense"]}
        >
          <TwitterIcon size={25} round={true} fill="#666666" />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.bluesense.co/blog/IOC"
          quote={"Why International Oil Companies are Divesting from Nigeria"}
          hashtag={"#Article"}
        >
          <FacebookIcon size={25} round={true} fill="#666666" />
        </FacebookShareButton>

        <LinkedinShareButton
          url="https://www.bluesense.co/blog/IOC"
          quote={"Why International Oil Companies are Divesting from Nigeria"}
          hashtag={"#Article"}
        >
          <LinkedinIcon size={25} round={true} fill="#666666" />
        </LinkedinShareButton>
        <WhatsappShareButton
          url="https://www.bluesense.co/blog/IOC"
          quote={"Why International Oil Companies are Divesting from Nigeria"}
          hashtag={"#Article"}
        >
          <WhatsappIcon size={25} round={true} fill="#666666" />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default InternationalOilCompanies;
