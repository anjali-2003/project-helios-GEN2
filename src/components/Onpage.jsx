import React, {useState} from "react";
import Page2 from "./Page2";
import Heading from "./Heading.jsx";
import ImageOn from "./ImageOn";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Startingpage from "./Startingpage";
import MainImage from "./MainImage";
import Page1 from "./Page1";
import { MDBFooter } from "mdb-react-ui-kit";

function Onpage(){
  const [allow,setallow] =useState(false);
  const [switchy, setty] = useState(false);
  const [color, changeColor] = useState("#000000");

  if(allow===true) {
    return(<Startingpage/>)
  } 
  
  const a = false
    
    return (
      <div class="overflow-hidden">
        <Row className="top-div">
          <Col>
            <Heading />
            <div className="on-off">
              {/* <Link to={'/'}> */}
              {/* <Button variant="dark" size="lg" onClick={
                ()=>{
                  setallow(!allow)
                }
              }>OFF</Button> */}
              {/* </Link> */}
              {/* <Button variant="dark" size="lg"> ON </Button> */}
              <img className="btn-img" src="images/on.jpg" onClick={
                ()=>{
                  setallow(!allow)
                  // a = true

                }
              }/>
            </div>
            </Col>
          <Col className="img-col"><ImageOn /></Col>
        </Row>
        <Page2 />
    </div>
      
    );
  }
  export default Onpage;