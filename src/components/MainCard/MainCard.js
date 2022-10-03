import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function MainCard() {
  return (
    <div className="maincard">
      <p className="para-secondary">Available Coin balance</p>
      <h1 className="value">340</h1>
      <ProgressBar />
      <p className="para mt-4">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </p>
      <div className="text-button mt-1 mb-2">
        <a className="para primary-color">View tier benefits</a>
        <img src="icons/chevron-right-blue.png"></img>
      </div>
      <button className="button">My Coupons</button>
      <p
        className="para-secondary regular-weight mt-1"
        style={{ textAlign: "center" }}
      >
        Updated : 02/11/2021
      </p>
    </div>
  );
}
