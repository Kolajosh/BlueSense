import React from "react";
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
              <p>Lagos, Nigeria.</p>
              <p className="downloadp">
                <a
                  href={require("../download/Profile.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Company Profile
                </a>
              </p>
            </div>

            <div className="right-text">
              <ul className="footer-items">
                <div className="col-2">
                  <ul>
                    <li>
                      <a href="/" className="footer-link">
                        Home
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/about" className="footer-link">
                        About
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/terms" className="footer-link" target="_blank">
                        <span className="blue-link">Terms of use</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>
                      <a href="/blog" className="footer-link">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/contact" className="footer-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        href="/privacypolicy"
                        className="footer-link"
                        target="_blank"
                      >
                        <span className="blue-link">Privacy Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <a href="/analytics" className="footer-link">
                        Core
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/bluesensegroup/"
                        target="_blank"
                        className="footer-link"
                        aria-label="linkedin"
                        rel="noreferrer"
                      >
                        <i class="fab fa-linkedin "></i>
                      </a>
                      <a
                        href="https://www.twitter.com/bluesensegroup/"
                        target="_blank"
                        className="footer-link"
                        aria-label="twitter"
                        rel="noreferrer"
                      >
                        <i class="fab fa-twitter-square "></i>
                      </a>
                      <a
                        href="https://www.facebook.com/bluesensegroup/"
                        target="_blank"
                        className="footer-link"
                        aria-label="facebook"
                        rel="noreferrer"
                      >
                        <i class="fab fa-facebook-square "></i>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        href="/cookiepolicy"
                        className="footer-link"
                        target="_blank"
                      >
                        <span className="blue-link">Cookie Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            <hr />
            <div className="subfoot">
              <div className="sub-foot">
                <p>
                  <i class="far fa-copyright"></i>2013-2022 BlueSense. Reuben &
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
