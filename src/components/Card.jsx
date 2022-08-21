import React from "react";
import { SocialIcon } from 'react-social-icons';

function Card(props) {
  return (
    <div className="card">
      <img className="team-img" src={props.img} alt="card" />
      <div className="container">
        <h2 className="team-mem-name">{props.name}</h2>
        <div className="icons">
          <span><SocialIcon style={{width:40, height:40, margin:5}} url={props.email} network="email" /></span>
          <span><SocialIcon style={{width:40, height:40, margin:5}} url={props.linkedin} network="linkedin"  /></span>
          <span><SocialIcon style={{width:40, height:40, margin:5}} url={props.twitter} network="twitter" /></span>
          <span><SocialIcon style={{width:40, height:40, margin:5}} url={props.github} network="github" bgColor="white" /></span>
        </div>
      </div>
    </div>
  );
}

export default Card;
