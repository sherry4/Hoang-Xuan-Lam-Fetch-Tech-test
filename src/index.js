import React, { useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/MainCard/MainCard";
import Slider from "./components/Slider/Slider";
import "./styles/main.scss";

const petrolData = [
  {
    image: "images/petrol-1.jpg",
    coins: 15,
    content: "50% discount for every $100 top-up on your Shell Petrol Card",
  },
  {
    image: "images/petrol-1.jpg",
    coins: 1000,
    content: "70% discount top-up on your Shell Petrol Card",
  },
];

const rentalData = [
  {
    image: "images/rental.jpg",
    coins: 20,
    content: "Get $20 Rental rebate",
  },
  {
    image: "images/rental.jpg",
    coins: 15,
    content: "Get $500 Rental rebate",
  },
];

const foodData = [
  {
    image: "images/food.jpg",
    coins: 25,
    content: "NTUC Fairprice $50 Voucher",
  },
  {
    image: "images/food.jpg",
    coins: 5,
    content: "Free Cold Stone Sundae at any flavour!",
  },
];

function App() {
  const [currentCoin, setCurrentCoin] = useState(100);
  return (
    <div className="container">
      <div className="dark-layer"></div>
      <div className="wrapper">
        <button className="round-btn">
          <img src="icons/chevron-left.png"></img>
        </button>
        <h3 className="title">Silver Tier</h3>
        <p className="para">
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </p>
        <MainCard />
      </div>
      <div className="sliders-container">
        <div>
          <h1 className="para-big mb-2">Petrol</h1>
          <Slider data={petrolData} currentCoin={currentCoin} />
        </div>
        <div>
          <h1 className="para-big mb-2">Rental Rebate</h1>
          <Slider data={rentalData} currentCoin={currentCoin} />
        </div>
        <div>
          <h1 className="para-big mb-2">Food and Beverage</h1>
          <Slider data={foodData} currentCoin={currentCoin} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
