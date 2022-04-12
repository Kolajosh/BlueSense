import React from "react";
import mvx from "../images/mvx.png";
import life from "../images/life.png";
import hippo from "../images/hipo.png";
import hugo from "../images/hugo.png";
import leeds from "../images/leeds.png";
import medecins from "../images/mede.png";
import icrc from "../images/icrc.png";
import hashvest from "../images/hash.png";
import easme from "../images/ease.png";
import garza from "../images/Mask Group-2.png";
import tonye from "../images/tonye.png";
import "./LogoComponent.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

function LogoComponent() {
  return (
    <>
      <div>
        <h1 className="section-heading">Some Clients</h1>
      </div>
      <div className="logo-reviews-flex">
        <div className="lr-section-1">
          <div className="logo-container">
            <div className="logo-box">
              <img src={mvx} alt="mvx-logo" className="logo-img"></img>
            </div>
            <div className="logo-box2">
              <img src={hugo} alt="leeds-logo" className="logo-img"></img>
            </div>
            <div className="logo-box">
              <img src={hippo} alt="payhippo-logo" className="logo-img"></img>
            </div>
            <div className="logo-box">
              <img src={life} alt="easme-logo" className="logo-img"></img>
            </div>
            <div className="logo-box">
              <img
                src={hashvest}
                alt="hashvest-logo"
                className="logo-img"
              ></img>
            </div>
          </div>
          <div className="logo-container-2">
            <div className="logo-box">
              <img src={leeds} alt="hugo-logo" className="logo-img"></img>
            </div>
            <br></br>
            <div className="logo-box">
              <img src={icrc} alt="ICRC-logo" className="logo-img"></img>
            </div>
            <div className="logo-box">
              <img
                src={medecins}
                alt="medecins-logo"
                className="logo-img"
              ></img>
            </div>
            <div className="logo-box1">
              <img src={easme} alt="lifestore-logo" className="logo-img1"></img>
            </div>
          </div>
        </div>
        <div className="lr-section-2">
          <div className="reviews-title">
            <h1>Client Reviews</h1>
          </div>
          <div className="reviews-flex">
            <div className="reviews-card">
              <div className="reviews-body">
                <p>
                  BlueSense led an in-depth growth session with our executive
                  team to identify practical and high-potential growth drivers
                  for our start-up. Our team was impressed by the frameworks and
                  recommendations and still refers to them today when crafting
                  strategy. BlueSense is insightful and collaborative and I
                  would highly recommend working with them.
                </p>
              </div>
              <div className="reviews-img">
                <img src={garza} alt=""></img>
              </div>
              <div className="reviews-info">
                <b>Andrew Garza</b>
                <p>Cofounder + COO Lifestores Pharmacy</p>
              </div>
            </div>
            <div className="reviews-card">
              <div className="reviews-body">
                <p>
                  We’ve had over 5 learning + advisory sessions with BlueSense
                  and each time, my team and I leave with a renewed sense of
                  purpose and clarity. Most recently, we had a eureka moment
                  during a leadership session with BlueSense that changed our
                  mission and the trajectory of our company for the better.
                  They’re exceptional with their work.
                </p>
              </div>
              <div className="reviews-img">
                <img src={tonye} alt=""></img>
              </div>
              <div className="reviews-info">
                <b>Tonye Membere-Otaji</b>
                <p>Founder MVX Trader </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="client-reviews-section">
        <CarouselProvider
          className="case-slide"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          dragEnabled={true}
          touchEnabled={true}
          totalSlides={2}
          interval={5000}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <div className="reviews-section-flex">
                <div className="section-1">
                  <div className="reviews-section-img">
                    <img src={tonye} alt=""></img>
                  </div>
                  <div className="reviews-section-info">
                    <b>Tonye Membere-Otaji</b>
                    <p>Founder MVX Trader </p>
                  </div>
                </div>
                <div className="section-2">
                  <div className="reviews-section-body">
                    <p>
                      We’ve had over 5 learning + advisory sessions with
                      BlueSense and each time, my team and I leave with a
                      renewed sense of purpose and clarity. Most recently, we
                      had a eureka moment during a leadership session with
                      BlueSense that changed our mission and the trajectory of
                      our company for the better. They’re exceptional with their
                      work.
                    </p>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide index={1}>
              <div className="reviews-section-flex">
                <div className="section-1">
                  <div className="reviews-section-img">
                    <img src={garza} alt=""></img>
                  </div>
                  <div className="reviews-section-info">
                    <b>Andrew Garza</b>
                    <p>
                      Cofounder + COO <br />
                      Lifestores Pharmacy
                    </p>
                  </div>
                </div>
                <div className="section-2">
                  <div className="reviews-section-body">
                    <p>
                      BlueSense led an in-depth growth session with our
                      executive team to identify practical and high-potential
                      growth drivers for our start-up. Our team was impressed by
                      the frameworks and recommendations and still refers to
                      them today when crafting strategy. BlueSense is insightful
                      and collaborative and I would highly recommend working
                      with them.
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
  */}
    </>
  );
}

export default LogoComponent;
