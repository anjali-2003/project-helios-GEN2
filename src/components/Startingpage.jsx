import React, {useState} from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Heading from "./Heading.jsx";
import MainImage from "./MainImage.jsx";
import ImageOn from "./ImageOn";

function Startingpage(){

    const [clicked,handleClick] = useState(false) ;
  
    function clickOn(){
      handleClick(true);
    };
    function clickOff(){
      handleClick(false);
    };
    
    return (
      <div>
        <div>
          <div className="left-box">
            <Heading />
            <div className="btn row">
              <button  onClick={clickOff} className="btn-off">OFF</button>
              <button  onClick={clickOn} className="btn-on"> ON </button>
            </div>
          </div>
          {clicked?<ImageOn />:<MainImage />}
        </div>
        {clicked?<Page2 />:<Page1 />}
    </div>
      
    );
  }
  export default Startingpage;