import React from "react";
import SliderItem from "./SliderItem";

export default function Slider({ data, currentCoin }) {
  return (
    <div className="slider">
      {data.map((item, idx) => (
        <SliderItem key={idx} item={item} currentCoin={currentCoin} />
      ))}
    </div>
  );
}
