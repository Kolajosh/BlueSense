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
