import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./BlogComponent.css";
import bigblog from "../images/blog-head.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/nsb.png";

function BlogComponent() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/blog/" />
        <meta
          name="description"
          content="View BlueSense Blog for Related Articles"
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, Startups, Intelligence, Blog, Articles"
        />
      </Helmet>
      <div className="blog-header">
        <img src={bigblog} alt=""></img>
        <h1>BlueSense Blog</h1>
      </div>

      <div className="blog-4">
        <div className="blog-post-4-img">
          <img src={blog4} alt=""></img>
        </div>
        <div className="blog-post-4">
          <div className="blog-text-4">
            <h2>The Nigerian Start-up Bill</h2>
            <p>
              April 2018 saw Tunisia becoming the first African country to pass
              a Startup act, this act took effect in October 2018 and
              essentially sought to provide a clear legal framework as well as
              support for Startups within the country...
            </p>
            <button className="read-more-btn">
              <Link to="/nsb"> Read More</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="blog-1">
        <div className="blog-post-1-img">
          <img src={blog1} alt=""></img>
        </div>
        <div className="blog-post-1">
          <div className="blog-text-1">
            <h2>Traits of great founders</h2>
            <p>
              The best companies today, started out with the best founders. The
              best founders have unique qualities which they have honed
              overtime. The best founders have a clear vision for the company
              they run. This is easily the most important of all ...
            </p>
            <button className="read-more-btn">
              <Link to="/traitsofgoodfounders"> Read More</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="blog-2">
        <div className="blog-post-2-img">
          <img src={blog2} alt=""></img>
        </div>
        <div className="blog-post-2">
          <div className="blog-text-2">
            <h2>Why Competition is futile for your Startup</h2>
            <p>
              You should never start a startup in a massive or over saturated
              market. You want to create a unique product and start with a small
              niche before scaling. Large and ...
            </p>
            <button className="read-more-btn">
              <Link to="/whycompetition"> Read More</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="blog-3">
        <div className="blog-post-3-img">
          <img src={blog3} alt=""></img>
        </div>
        <div className="blog-post-3">
          <div className="blog-text-3">
            <h2>6 Guides to Fundraising for your Startup</h2>
            <p>
              Raising funds for your startup is not as difficult as you think;
              because there are more investors out there than there are
              startups. These six ...
            </p>
            <button className="read-more-btn">
              <Link to="/6guides"> Read More</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="read-more-div">
        <h3>Visit our social media blogs below for more articles</h3>

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
      </div>
    </>
  );
}

export default BlogComponent;
