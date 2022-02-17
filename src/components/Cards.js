import React from "react";
import icon from "../images/icon.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import "./Cards.css";

function Cards() {
  return (
    <>
      <h1 className="card-heading">Core Competencies</h1>
      <div className="flex-container">
        <div className="item-1">
          <a href="/strategy" className="card-links">
            {" "}
            <div className="icon">
              <img src={icon} alt="icon" className="card-img"></img>
            </div>
            <p className="subtitle-flex">Strategy</p>
          </a>
          <div className="middle-text-1">
            <p>
              As a consulting firm, we take pride in carrying out thorough
              research on our clients businesses and/or industries. We also
              assess your team to draw inferences from past and present
              performances. This is to ensure that we come up with the best
              possible (recommended) strategies that aids the sustainability of
              these businesses in the long run.
            </p>
          </div>
        </div>
        <div className="item-2">
          <a href="/learning" className="card-links">
            <div className="icon">
              <img src={icon1} alt="icon1" className="card-img"></img>
            </div>
            <p className="subtitle-flex">Learning</p>
          </a>
          <div className="middle-text-2">
            <p>
              At BlueSense, we offer learning services ranging from seminars to
              team training, and even to personal training for executives. This
              is done with the sole aim of improving on these teams, encouraging
              reflection to yield results, and motivating teams for potential
              achievements.
            </p>
          </div>
        </div>
        <div className="item-3">
          <a href="/advisory" className="card-links">
            <div className="icon2">
              <img src={icon2} alt="icon2" className="card-img"></img>
            </div>
            <p className="subtitle-flex">Advisory</p>
          </a>
          <div className="middle-text">
            <p>
              As a team, we are constantly looking to help businesses thrive in
              the fast changing business world, and we do this by giving
              recommendations backed with research, to our clients.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-item-1">
          <a href="/strategy" className="card-links-1">
            {" "}
            <div className="card-icon-1">
              <img src={icon} alt="icon" className="card-img-1"></img>
            </div>
            <h2 className="card-subtitle-flex">Strategy</h2>
          </a>
          <div className="card-middle-text-1">
            <p>
              As a consulting firm, we take pride in carrying out thorough
              research on our clients businesses and/or industries. We also
              assess your team to draw inferences from past and present
              performances. This is to ensure that we come up with the best
              possible (recommended) strategies that aids the sustainability of
              these businesses in the long run.
            </p>
          </div>
        </div>

        <div className="card-item-1">
          <a href="/learning" className="card-links-1">
            {" "}
            <div className="card-icon-1">
              <img src={icon1} alt="icon" className="card-img-1"></img>
            </div>
            <h2 className="card-subtitle-flex">Learning</h2>
          </a>
          <div className="card-middle-text-1">
            <p>
              At BlueSense, we offer learning services ranging from seminars to
              team training, and even to personal training for executives. This
              is done with the sole aim of improving on these teams, encouraging
              reflection to yield results, and motivating teams for potential
              achievements.
            </p>
          </div>
        </div>

        <div className="card-item-1">
          <a href="/advisory" className="card-links-1">
            {" "}
            <div className="card-icon-1">
              <img src={icon2} alt="icon" className="card-img-1"></img>
            </div>
            <h2 className="card-subtitle-flex">Advisory</h2>
          </a>
          <div className="card-middle-text-1">
            <p>
              As a team, we are constantly looking to help businesses thrive in
              the fast changing business world, and we do this by giving
              recommendations backed with research, to our clients..
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
