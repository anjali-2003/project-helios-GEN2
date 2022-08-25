import React from "react";

function Adv(props) {
  return (
    <span className="adv">
      <img className="adv-img" src={props.img} alt="adv-img" />
      <div className="container">
        <p className="adv-description">{props.text}</p>
      </div>
    </span>
  );
}

export default Adv;
