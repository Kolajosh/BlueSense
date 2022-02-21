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
import "./LogoComponent.css";

function LogoComponent() {
  return (
    <>
      <div>
        <h1 className="section-heading">Some Clients</h1>
      </div>

      <div className="logo-container">
        <div className="logo-box">
          <img src={mvx} alt="mvx-logo" className="logo-img"></img>
        </div>
        <div className="logo-box">
          <img src={hugo} alt="leeds-logo" className="logo-img"></img>
        </div>
        <div className="logo-box">
          <img src={hippo} alt="payhippo-logo" className="logo-img"></img>
        </div>
        <div className="logo-box">
          <img src={life} alt="easme-logo" className="logo-img"></img>
        </div>
        <div className="logo-box">
          <img src={hashvest} alt="hashvest-logo" className="logo-img"></img>
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
          <img src={medecins} alt="medecins-logo" className="logo-img"></img>
        </div>
        <div className="logo-box1">
          <img src={easme} alt="lifestore-logo" className="logo-img1"></img>
        </div>
      </div>
    </>
  );
}

export default LogoComponent;
