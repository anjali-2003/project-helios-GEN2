import React from "react";

function Adv(props) {
  return (
    <div className="adv">
      <img className="adv-img" src={props.img} alt="adv-img" />
      <div className="container">
        <p className="adv-description">{props.text}</p>
      </div>
    </div>
  );
}

export default Adv;
