import React, {useState} from "react";
import Page1 from "./Page1";
import Heading from "./Heading.jsx";
import MainImage from "./MainImage.jsx";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feature from "./Feature";
import Onpage from "./Onpage";

function Startingpage(){

  const [color, changeColor] = useState("#000000");
  const [allow,setallow] =useState(false) 
  if(allow===true) {

    return(<Onpage/>)
  } 
    return (
      <div style={{ backgroundColor: color }} className="overflow-hidden">
        <Row className="top-div">
          <Col>
            <Heading />
            <div className="on-off">
              <Button variant="outline-secondary" size="lg"
                >OFF</Button>
              {/* <Link to={'/on'} onClick={() => changeColor("#FFFFFF")}>
                <Button variant="outline-secondary" size="lg"> ON </Button>
              </Link> */}
              <Button variant="outline-secondary" size="lg" onClick={
                ()=>{
                  setallow(!allow)
                }
              }> ON </Button>
            </div>
          </Col>
          <Col className="img-col"><MainImage /></Col>
        </Row>
        <Page1 />
    </div>
      
    );
  }
  export default Startingpage;