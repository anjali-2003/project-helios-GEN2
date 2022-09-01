import React from "react";
import Col from 'react-bootstrap/Col';

function Adv(props) {
  return (
    <Col xs={12} md={6} lg={4} className="dis-adv-row">
      <img className="adv-img" src={props.img} alt="adv-img" />
      <p className="adv-desc" >{props.text}</p>
    </Col>
  );
}

export default Adv;
