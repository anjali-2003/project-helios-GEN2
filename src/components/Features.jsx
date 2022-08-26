
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import featuredata from "../featuredata";


function Features() {

    return (
        <div className="feat-pg"> 
            <h1 className="ptitle" style={{textAlign:'center'}}>Features</h1>
            <Card1 
                img= {featuredata[0].imgsrc}
                detail= {featuredata[0].detail}
            />
            <Card2 
                img= {featuredata[1].imgsrc}
                detail= {featuredata[1].detail}
            />
        </div>
    );
}
export default Features;