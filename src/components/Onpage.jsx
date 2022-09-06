import React, {useState} from "react";
import Page2 from "./Page2";
import Heading from "./Heading.jsx";
import ImageOn from "./ImageOn";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Startingpage from "./Startingpage";

function Onpage(){
  const [allow,setallow] =useState(false) 

  if(allow===true) {

    return(<Startingpage/>)
  } 

    
    return (
      <div class="overflow-hidden">
        <Row className="top-div">
          <Col>
            <Heading />
            <div className="on-off">
              {/* <Link to={'/'}> */}
              <Button variant="dark" size="lg" onClick={
                ()=>{
                  setallow(!allow)
                }
              }>OFF</Button>
              {/* </Link> */}
              <Button variant="dark" size="lg"> ON </Button>
            </div>
            </Col>
          <Col className="img-col"><ImageOn /></Col>
        </Row>
        <Page2 />
    </div>
      
    );
  }
  export default Onpage;