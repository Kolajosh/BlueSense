import React from "react";
import garza from "../images/Mask Group-2.png";
import tonye from "../images/tonye.png";
import "./Reviews.css";

function Reviews() {
  return (
    <>
      <div>
        <div className="reviews-container">
          <div className="reviews-title">
            <h1>Client Reviews</h1>
          </div>
          <div className="reviews-flex">
            <div className="reviews-card">
              <div className="reviews-img">
                <img src={garza} alt=""></img>
              </div>
              <div className="reviews-info">
                <b>Andrew Garza</b>
                <p>Cofounder + COO Lifestores Pharmacy</p>
              </div>
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
            </div>
            <div className="reviews-card">
              <div className="reviews-img">
                <img src={tonye} alt=""></img>
              </div>
              <div className="reviews-info">
                <b>Tonye Membere-Otaji</b>
                <p>Founder MVX Trader </p>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
