import React from "react";
import Heading from "./Heading";
import Buttons, {x} from "./Buttons";
import MainImage from "./MainImage";
import Page2 from "./Page2";
import Card from "./Card";
import contacts from "../contacts";
import Adv from "./Adv";
import description from "../description";
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


function App() {

  if (x===false){
  // if (x===true){
    return(
      <div>
        <Page2 />
        <div style={{color:"white", fontSize:40, textAlign:"center"}}>Advantages</div>
        {description.map(createText)}
        <div style={{color:"white", fontSize:40, textAlign:"center"}}>Team Members</div>
        {contacts.map(createCard)}
      </div>
    );
  }
  else{
    return (
      <div>
        <Heading />
        <Buttons />
        <MainImage />
        <div style={{color:"white", fontSize:40, textAlign:"center"}}>Dis - advantages</div>
        {description.map(createText)}
        <ScrollToTop smooth="true" viewBox="0 -50 350 200" />
      </div>
    );
  }
  
}

export default App;
