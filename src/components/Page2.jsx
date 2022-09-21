
import React, {useState} from "react";
import Features from "./Features";
import Adv from "./Adv";
import Card from "./Card";
import description from "../description";
import contacts from "../contacts";
import { MDBFooter} from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';

function createCard(contact) {
    return (
      <Card
        key={contact.id}
        img={contact.img}
        name={contact.name}
        email={contact.email}
        linkedin={contact.linkedin}
        twitter={contact.twitter}
        github={contact.github}
      />
    );
  }
  
  function createText(des) {
    return(
      <Adv 
        key={des.id}
        img={des.img}
        text={des.text}
      />
    );
  }
 function Page2() {
    return <div>
    <Features />
    <div style={{color:"black", fontSize:40, textAlign:"center",marginTop:40,marginBottom:30, fontFamily: 'Acme sans-serif'}}>Advantages</div>
    <Row>
      {description.map(createText)}
    </Row>
    <div style={{color:"black", fontSize:40, textAlign:"center",marginTop:40,marginBottom:30, fontFamily: 'Acme sans-serif'}}>Team Members</div>
    <Row>
      {contacts.map(createCard)}
    </Row>
    <MDBFooter>
      <div className='text-center p-4' style={{ backgroundColor: "rgb(235,235,235)" }}>
        <a  title="Scroll to top" className='text-reset fw-bold' href='#'>
        <img className="icon" src="images/arrow-icon-dark.png" />
        </a>
      </div>
    </MDBFooter>
  </div>
 }
 export default Page2;