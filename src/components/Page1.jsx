
import React from "react";
import Adv from "./Adv";
import description from "../description";
import ScrollToTop from "react-scroll-to-top";
import Row from 'react-bootstrap/Row';


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
      <div style={{color:"white",fontSize:40,textAlign:"center",marginTop:100,marginBottom:30}}>Dis - advantages</div>
      <Row>
        {description.map(createText)}
      </Row>
    <ScrollToTop smooth="true" viewBox="0 0 260 200" />
  </div>
}
export default Page1;