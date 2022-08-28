
import React from "react";
import Adv from "./Adv";
import description from "../description";
import ScrollToTop from "react-scroll-to-top";

function createText(des) {
    return(
      <Adv 
        key={des.id}
        img={des.img}
        text={des.text}
      />
    );
}
  
function Page1() {
    return <div >
    {/* <div > */}
      <div style={{color:"white", fontSize:40, textAlign:"center"}}>Dis - advantages</div>

      <div style={{paddingLeft:200, paddingRight:200}}>
        {description.map(createText)}
      </div>
    {/* </div> */}
    <ScrollToTop smooth="true" viewBox="0 -50 350 200" />
  </div>
}
export default Page1;