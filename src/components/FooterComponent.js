import React from "react";
import { Link } from "react-router-dom";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='row'>
            <div className='left-text'>
              <h4>
                <span className='company-name'>BlueSense</span>
              </h4>
              <p>WorkStation, Victoria Island</p>
              <p>Lagos, Nigeria</p>
            </div>

            <div className='right-text'>
              <ul className='footer-items'>
                <div className='col-2'>
                  <li>
                    <Link to='/' className='footer-link'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/about' className='footer-link'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='footer-link'>
                      <span className='blue-link'>Terms of use</span>
                    </Link>
                  </li>
                </div>
                <div className='col-2'>
                  <li>
                    <Link to='/blog' className='footer-link'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact' className='footer-link'>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to='/privacypolicy' className='footer-link'>
                      <span className='blue-link'>Privacy Policy</span>
                    </Link>
                  </li>
                </div>
                <div className='col-1'>
                  <li>
                    <Link to='/core' className='footer-link'>
                      Core
                    </Link>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/company/bluesensegroup/'
                      className='footer-link'>
                      <i class='fab fa-linkedin '></i>
                    </a>
                    <a
                      href='https://www.twitter.com/bluesensegroup/'
                      className='footer-link'>
                      <i class='fab fa-twitter-square '></i>
                    </a>
                    <a
                      href='https://www.facebook.com/bluesensegroup/'
                      className='footer-link'>
                      <i class='fab fa-facebook-square '></i>
                    </a>
                  </li>
                  <li>
                    <Link to='/about' className='footer-link'>
                      <span className='blue-link'>Cookie Policy</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <hr />
            <div className='subfoot'>
              <div className='sub-foot'>
                <p>
                  <i class='far fa-copyright'></i>2013-2021 BlueSense. Reuben &
                  Company. Lagos. Nigeria. All Rights Reserved.{" "}
                </p>
              </div>
              <div className='contact-right'>
                <p>info@bluesense.co &nbsp; +234 806 578 4615</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
