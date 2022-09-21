import React, { useState } from "react";
import Page1 from "./Page1";
import Heading from "./Heading.jsx";
import MainImage from "./MainImage.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feature from "./Feature";
import Onpage from "./Onpage";
import { MDBFooter } from 'mdb-react-ui-kit';



function Startingpage() {
  // const switchy =false;

  const [color, changeColor] = useState("#000000");
  const [allow, setallow] = useState(false);
  const [switchy, setty] = useState(false);

  if (allow === true) {
    return (<Onpage />)
  } 
  else {
    return (
      <div style={{ backgroundColor: color }} className="overflow-hidden">
        <Row className="top-div">
          <Col>
            <Heading />
            { 
              switchy && 
              <div className="on-off">
                <img className="btn-img" src="images/off.jpg" onClick={
                  () => {
                    setallow(!allow)
                  }
                } />
              </div>
            }
          </Col>
          <Col className="img-col"><MainImage /></Col>
        </Row>
        <Page1 />
        <MDBFooter>
          <div className='text-center p-4' style={{ backgroundColor: "rgb(8,8,8)" }}>
            <a title="Scroll to top" className='text-reset fw-bold' href='#' onClick={
              () => {
                setty(true)
                // switchy=true 
              }}>
              <img className="icon" src="images/arrow-icon-light.png" />
            </a>
          </div>
        </MDBFooter>
      </div>

    );
    // else {
    //   return (
    //     <div style={{ backgroundColor: color }} className="overflow-hidden">
    //       <Row className="top-div">
    //         <Col>
    //           <Heading />
    //         </Col>
    //         <Col className="img-col"><MainImage /></Col>
    //       </Row>
    //       <Page1 />
    //       <MDBFooter>
    //         <div className='text-center p-4' style={{ backgroundColor: "rgb(8,8,8)" }}>
    //           <a title="Scroll to top" className='text-reset fw-bold' href='#' onClick={
    //             () => {
    //               setty(true)
    //             }}>
    //             <img className="icon" src="images/arrow-icon-light.png" />
    //           </a>
    //         </div>
    //       </MDBFooter>
    //     </div>

    //   );
    // }

  }

}
export default Startingpage;
