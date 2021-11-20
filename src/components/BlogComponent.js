import React from "react";
import "./BlogComponent.css";
import bigblog from "../images/blog-head.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";

function BlogComponent() {
  return (
    <>
      <div className='blog-header'>
        <img src={bigblog} alt=''></img>
        <h1>Bluesense Blog</h1>
      </div>

      <div className='blog-1'>
        <div className='blog-post-1-img'>
          <img src={blog1} alt=''></img>
        </div>
        <div className='blog-post-1'>
          <div className='blog-text-1'>
            <h2>Traits of great founders</h2>
            <p>
              The best companies today, started out with the best founders. The
              best founders have unique qualities which they have honed
              overtime. The best founders have a clear vision for the company
              they run. This is easily the most important of all ...
            </p>
            <button className='read-more-btn'>Read More</button>
          </div>
        </div>
      </div>

      <div className='blog-2'>
        <div className='blog-post-2-img'>
          <img src={blog2} alt=''></img>
        </div>
        <div className='blog-post-2'>
          <div className='blog-text-2'>
            <h2>Why Competition is futile for your Startup</h2>
            <p>
              You should never start a startup in a massive or over saturated
              market. You want to create a unique product and start with a small
              niche before scaling. Large and ...
            </p>
            <button className='read-more-btn'>Read More</button>
          </div>
        </div>
      </div>

      <div className='blog-3'>
        <div className='blog-post-3-img'>
          <img src={blog3} alt=''></img>
        </div>
        <div className='blog-post-3'>
          <div className='blog-text-3'>
            <h2>6 Guides to Fundraising for your Startup</h2>
            <p>
              Raising funds for your startup is not as difficult as you think;
              because there are more investors out there than there are
              startups. These six ...
            </p>
            <button className='read-more-btn'>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogComponent;
