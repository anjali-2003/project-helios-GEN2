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
import Features from "./Features";

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
      </div>
    );
  }
  else{
    return (
      <div >
        <div>
          <div className="left-box">
            <Heading />
            <Buttons />
          </div>
          <MainImage />
        </div>
        {/* <div > */}
          <div style={{color:"white", fontSize:40, textAlign:"center"}}>Dis - advantages</div>

          <div style={{paddingLeft:200, paddingRight:200}}>
            {description.map(createText)}
          </div>
        {/* </div> */}
        <ScrollToTop smooth="true" viewBox="0 -50 350 200" />
      </div>
    );
  }
  
}

export default App;
