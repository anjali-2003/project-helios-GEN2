
import React from "react";
import Features from "./Features";
import Adv from "./Adv";
import Card from "./Card";
import description from "../description";
import contacts from "../contacts";
import ScrollToTop from "react-scroll-to-top";

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
    <div style={{color:"white", fontSize:40, textAlign:"center"}}>Advantages</div>
    {/* {description.map(createText)} */}
    <div style={{paddingLeft:200, paddingRight:200}}>
      {description.map(createText)}
    </div>
    <div style={{color:"white", fontSize:40, textAlign:"center"}}>Team Members</div>
    <div style={{paddingLeft:130, paddingRight:100}}>
      {contacts.map(createCard)}
    </div>
    <ScrollToTop smooth="true" viewBox="0 -50 350 200" />
  </div>
 }
 export default Page2;