import React from "react";
import classnames from "classnames";
import pluralize from "pluralize";

export default function SliderItem({ item, currentCoin }) {
  let isInsufficient = item.coins > currentCoin;
  return (
    <div className="card">
      <img src={item.image} />
      <div className="card-content">
        <div className="card-label">
          {isInsufficient && (
            <img src="icons/coin.png" width={16} height={16}></img>
          )}
          <p
            className={classnames("para", "primary-text", {
              "disabled-text": isInsufficient,
            })}
          >
            {item.coins} {pluralize("Coin", item.coins)}
          </p>
        </div>
        <p
          className={classnames("para", "mt-05", {
            "truncate-2": isInsufficient,
            "truncate-3": !isInsufficient,
          })}
        >
          {item.content}
        </p>
        {isInsufficient && (
          <p className="para-secondary primary-text mt-05">
            Insufficient coins
          </p>
        )}
      </div>
    </div>
  );
}
