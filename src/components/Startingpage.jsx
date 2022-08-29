import React, {useState} from "react";
import Page1 from "./Page1";
import Heading from "./Heading.jsx";
import MainImage from "./MainImage.jsx";
import { Link } from "react-router-dom";

function Startingpage(){
    
    return (
      <div>
        <div>
          <div className="left-box">
            <Heading />
            <div className="btn row">
              <button className="btn-off">OFF</button>
              <Link to={'/on'}>
                <button className="btn-on"> ON </button>
              </Link>
              
            </div>
          </div>
          <MainImage />
        </div>
        <Page1 />
    </div>
      
    );
  }
  export default Startingpage;