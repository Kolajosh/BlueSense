import React from "react";
import "./BlogComponent.css";
import bigblog from "../images/blog-head.png";
import smallblog from "../images/smallblog.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/nsb.png";
import blog5 from "../images/blog00.png";
import blog6 from "../images/autogas.png";
import oilblog from "../images/oilblog.png";
import smalliwd from "../images/smalliwd.png";
import fintechsmall from "../images/fintechsmall.png";
import debt from "../images/debt.png";
import wagesmall from "../images/wagesmall.png";
import flightsmall from "../images/flightsmall.png";

function BlogComponent() {
  return (
    <>
      <div className="blog-header">
        <img src={bigblog} alt="" className="big-blog"></img>
        <img src={smallblog} alt="" className="small-blog"></img>

        <h1>BlueSense Blog</h1>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/flightdelays">Flight Delays in Nigeria </a>
            </h2>
            <p>
              Air transportation in Nigeria has been plagued by the frequent
              occurrence of flight delays which has impacted travellers and the
              economy negatively.
              <br />
              <br />
              <a href="/blog/flightdelays" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={flightsmall} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={flightsmall} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/flightdelays">Flight Delays in Nigeria </a>
            </h2>{" "}
            <p>
              Air transportation in Nigeria has been plagued by the frequent
              occurrence of flight delays which has impacted travellers and the
              economy negatively.
              <br />
              <br />
              <a href="/blog/flightdelays" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/fintech">
                Nigeria’s fintech + Financial Inclusion
              </a>
            </h2>
            <p>
              Financial technology or fintech is an innovative endeavour through
              technology that seeks to deliver financial services through
              software...
              <br />
              <br />
              <a href="/blog/fintech" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={fintechsmall} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={fintechsmall} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/fintech">
                Nigeria’s fintech + Financial Inclusion
              </a>
            </h2>{" "}
            <p>
              Financial technology or fintech is an innovative endeavour through
              technology that seeks to deliver financial services through
              software...
              <br />
              <br />
              <a href="/blog/fintech" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/wage">Nigeria’s Minimum Wage</a>
            </h2>
            <p>
              Following the country’s independence in October 1960, the Labour
              Union pressed the government to regulate the minimum wage.
              However, it was not until 1978...
              <br />
              <br />
              <a href="/blog/wage" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={wagesmall} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={wagesmall} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/wage">Nigeria’s Minimum Wage</a>
            </h2>{" "}
            <p>
              Following the country’s independence in October 1960, the Labour
              Union pressed the government to regulate the minimum wage.
              However, it was not until 1978...
              <br />
              <br />
              <a href="/blog/wage" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/debt">Nigeria's Debt Situation</a>
            </h2>
            <p>
              In the last few years, Nigeria’s debt has grown significantly; The
              Nigerian economy, which has not been doing well...
              <br />
              <br />
              <a href="/blog/debt" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={debt} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={debt} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/debt">Nigeria's Debt Situation</a>
            </h2>{" "}
            <p>
              In the last few years, Nigeria’s debt has grown significantly; The
              Nigerian economy, which has not been doing well...
              <br />
              <br />
              <a href="/blog/debt" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/iwd">
                #Breakthebias: Everything you need to know about International
                Women’s Day and the theme for 2022
              </a>
            </h2>
            <p>
              International Women’s Day is marked annually on March 8 and
              honours women worldwide for their...
              <br />
              <br />
              <a href="/blog/iwd" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={smalliwd} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={smalliwd} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/iwd">
                #Breakthebias: Everything you need to know about International
                Women’s Day and the theme for 2022
              </a>
            </h2>{" "}
            <p>
              International Women’s Day is marked annually on March 8 and
              honours women worldwide for their...
              <br />
              <br />
              <a href="/blog/iwd" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/IOC">
                {" "}
                Why International Oil Companies are Divesting from Nigeria{" "}
              </a>
            </h2>
            <p>
              Ever since oil was discovered in Nigeria, Nigeria saw
              international oil companies coming into the country to set up
              branches for crude oil exploration which served as a source of...
              <br />
              <br />
              <a href="/blog/IOC" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={oilblog} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={oilblog} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/internationaloilcompanies">
                {" "}
                Why International Oil Companies are Divesting from Nigeria{" "}
              </a>
            </h2>{" "}
            <p>
              Ever since oil was discovered in Nigeria, Nigeria saw
              international oil companies coming into the country to set up
              branches for crude oil exploration which served as a source of...
              <br />
              <br />
              <a href="/blog/internationaloilcompanies" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/autogas">
                {" "}
                Will autogas surpass petrol to become the new fuel in Nigeria?
              </a>
            </h2>
            <p>
              Nigeria began producing oil and gas in 1958 when the country's
              first oil discovery well was dug at Oloibiri (present-day Bayelsa
              State, Niger Delta Region). Gas output...
              <br />
              <br />
              <a href="/blog/autogas" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={blog6} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={blog6} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/autogas">
                {" "}
                Will autogas surpass petrol to become the new fuel in Nigeria?
              </a>
            </h2>{" "}
            <p>
              Nigeria began producing oil and gas in 1958 when the country's
              first oil discovery well was dug at Oloibiri (present-day Bayelsa
              State, Niger Delta Region). Gas output...
              <br />
              <br />
              <a href="/blog/autogas" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/startuptrends"> Start-up Trends in 2022</a>
            </h2>
            <p>
              In 2020 there was a paradigm shift in businesses and
              entrepreneurship globally with a lot of business closures. 2020
              and 2021 also saw the launch of a multitude of new small
              businesses, globally....
              <br />
              <br />
              <a href="/blog/startuptrends" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={blog5} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={blog5} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/startuptrends"> Start-up Trends in 2022</a>
            </h2>{" "}
            <p>
              In 2020 there was a paradigm shift in businesses and
              entrepreneurship globally with a lot of business closures. 2020
              and 2021 also saw the launch of a multitude of new small
              businesses, globally....
              <br />
              <br />
              <a href="/blog/startuptrends" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/nsb"> The Nigerian Start-up Bill</a>
            </h2>
            <p>
              April 2018 saw Tunisia becoming the first African country to pass
              a Start-up act, this act took effect in October 2018 and
              essentially sought to provide a clear legal framework as well as
              support for Start-ups within the country...
              <br />
              <br />
              <a href="/blog/nsb" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={blog4} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={blog4} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/nsb"> The Nigerian Start-up Bill</a>
            </h2>{" "}
            <p>
              April 2018 saw Tunisia becoming the first African country to pass
              a Start-up act, this act took effect in October 2018 and
              essentially sought to provide a clear legal framework as well as
              support for Start-ups within the country...
              <br />
              <br />
              <a href="/blog/nsb" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/traitsofgoodfounders">Traits of great founders</a>
            </h2>
            <p>
              The best companies today, started out with the best founders. The
              best founders have unique qualities which they have honed
              overtime. The best founders have a clear vision for the company
              they run. This is easily the most important of all ...
              <br />
              <br />
              <a href="/blog/traitsofgoodfounders" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={blog1} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={blog1} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/traitsofgoodfounders">Traits of great founders</a>
            </h2>
            <p>
              The best companies today, started out with the best founders. The
              best founders have unique qualities which they have honed
              overtime. The best founders have a clear vision for the company
              they run. This is easily the most important of all ...
              <br />
              <br />
              <a href="/blog/traitsofgoodfounders" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/whycompetition">
                {" "}
                Why Competition is futile for your Start-up
              </a>
            </h2>
            <p>
              You should never start a start-up in a massive or over saturated
              market. You want to create a unique product and start with a small
              niche before scaling. Large and ...
              <br />
              <br />
              <a href="/blog/whycompetition" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={blog2} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={blog2} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/whycompetition">
                {" "}
                Why Competition is futile
                <br /> for your Start-up
              </a>
            </h2>{" "}
            <p>
              You should never start a start-up in a massive or over saturated
              market. You want to create a unique product and start with a small
              niche before scaling. Large and ...
              <br />
              <br />
              <a href="/blog/whycompetition" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-0">
        <div className="blog-post-0">
          <div className="blog-text-0">
            <h2>
              <a href="/blog/6guides">
                {" "}
                6 Guides to Fundraising for your Start-up
              </a>
            </h2>
            <p>
              Raising funds for your start-up is not as difficult as you think;
              because there are more investors out there than there are
              start-ups. These six ...
              <br />
              <br />
              <a href="/blog/6guides" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
          <div className="blog-post-0-img">
            <img src={blog3} alt=""></img>
          </div>
        </div>
      </div>

      <div className="blog-01">
        <div className="blog-post-01">
          <div className="blog-post-01-img">
            <img src={blog3} alt=""></img>
          </div>
          <div className="blog-text-01">
            <h2>
              <a href="/blog/6guides">
                {" "}
                6 Guides to Fundraising
                <br /> for your Start-up
              </a>
            </h2>{" "}
            <p>
              Raising funds for your start-up is not as difficult as you think;
              because there are more investors out there than there are
              start-ups. These six ...
              <br />
              <br />
              <a href="/blog/6guides" className="linkblog">
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="read-more-div">
        <p>
          Read more... &nbsp;
          <a
            href="https://www.linkedin.com/company/bluesensegroup/posts/?feedView=articles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="bluesense post"
          >
            <i class="fab fa-linkedin" />{" "}
          </a>
          <a
            href="https://bluesense.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="bluesense post"
          >
            <i class="fab fa-medium" />
          </a>
        </p>
      </div>
    </>
  );
}

export default BlogComponent;
