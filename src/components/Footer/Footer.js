import React from "react";

const menu = ["home", "noti", "menu", "user"];
export default function Footer() {
  return (
    <div className="footer">
      {menu.map((item, idx) => (
        <div key={idx} style={{ position: "relative" }}>
          {item == "noti" && <div className="noti-dot"></div>}
          <img src={`icons/${item}.svg`} width={40} height={40} />
        </div>
      ))}
    </div>
  );
}
