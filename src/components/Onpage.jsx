import React, {useState} from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Heading from "./Heading.jsx";
import MainImage from "./MainImage.jsx";
import ImageOn from "./ImageOn";
import { Link } from "react-router-dom";

function Onpage(){

    
    return (
      <div>
        <div>
          <div className="left-box">
            <Heading />
            <div className="btn row">
              <Link to={'/'}>
              <button className="btn-off">OFF</button>
              </Link>
              <button className="btn-on"> ON </button>
            </div>
          </div>
          <ImageOn />
        </div>
        <Page2 />
    </div>
      
    );
  }
  export default Onpage;