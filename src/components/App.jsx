import React from "react";
import Heading from "./Heading";
import Buttons from "./Buttons";
import MainImage from "./MainImage";

function App() {
  return (
    <div className="rows">
    {/* <Heading />
    <Buttons />
    <MainImage /> */}
      <div className="row"><Heading /></div>
      <div className="row"><Buttons /></div>
      <div className="row"><MainImage /></div>
    </div>
  );
}

export default App;
