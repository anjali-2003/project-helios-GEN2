import React, {useState} from "react";
import Page1 from "./Page1";
import Heading from "./Heading.jsx";
import MainImage from "./MainImage.jsx";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Startingpage(){

  const [color, changeColor] = useState("#000000");
    
    return (
      <div style={{ backgroundColor: color }}>
        <Row className="top-div">
          <Col>
            <Heading />
            <div className="on-off">
              <Button variant="outline-secondary" size="lg">OFF</Button>
              <Link to={'/on'} onClick={() => changeColor("#FFFFFF")}>
                <Button variant="outline-secondary" size="lg"> ON </Button>
              </Link>
            </div>
          </Col>
          <Col className="img-col"><MainImage /></Col>
        </Row>
        <Page1 />
    </div>
      
    );
  }
  export default Startingpage;