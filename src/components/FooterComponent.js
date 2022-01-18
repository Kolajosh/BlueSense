import React from "react";
import { Link } from "react-router-dom";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="left-text">
              <h4>
                <span className="company-name">BlueSense</span>
              </h4>
              <p>WorkStation, Victoria Island</p>
              <p>Lagos, Nigeria</p>
            </div>

            <div className="right-text">
              <ul className="footer-items">
                <div className="col-2">
                  <ul>
                    <li>
                      <Link to="/" className="footer-link">
                        Home
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/about" className="footer-link">
                        About
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/terms" className="footer-link">
                        <span className="blue-link">Terms of use</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>
                      <Link to="/blog" className="footer-link">
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/contact" className="footer-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/privacypolicy" className="footer-link">
                        <span className="blue-link">Privacy Policy</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <Link to="/core" className="footer-link">
                        Core
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/bluesensegroup/"
                        className="linkedin"
                      >
                        <i class="fab fa-linkedin "></i>
                      </a>
                      <a
                        href="https://www.twitter.com/bluesensegroup/"
                        className="footer-link"
                        aria-label="twitter"
                      >
                        <i class="fab fa-twitter-square "></i>
                      </a>
                      <a
                        href="https://www.facebook.com/bluesensegroup/"
                        className="footer-link"
                        aria-label="facebook"
                      >
                        <i class="fab fa-facebook-square "></i>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/cookiepolicy" className="footer-link">
                        <span className="blue-link">Cookie Policy</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            <hr />
            <div className="subfoot">
              <div className="sub-foot">
                <p>
                  <i class="far fa-copyright"></i>2013-2021 BlueSense. Reuben &
                  Company. Lagos. Nigeria. All Rights Reserved.{" "}
                </p>
              </div>
              <div className="contact-right">
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
