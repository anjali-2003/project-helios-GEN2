
import React from "react";
import Adv from "./Adv";
import description from "../description";
import Row from 'react-bootstrap/Row';
// import { MDBFooter} from 'mdb-react-ui-kit';


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
      <div id="dis-advantages" style={{color:"white",fontSize:40,textAlign:"center",marginTop:100,marginBottom:30, fontFamily: 'Acme sans-serif'}}>Dis - advantages</div>
      <Row>
        {description.map(createText)}
      </Row>
      {/* <MDBFooter>
      <div className='text-center p-4' style={{ backgroundColor: "rgb(8,8,8)" }}>
        <a title="Scroll to top" className='text-reset fw-bold' href='#' onClick={
        ()=>{
          setswitch(true)
        }}>
        <img className="icon" src="images/arrow-icon-light.png" />
        </a>
      </div>
      </MDBFooter> */}
  </div>
}
export default Page1;