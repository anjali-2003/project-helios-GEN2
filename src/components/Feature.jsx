
import React from "react";
import featuredata from "../featuredata";
import { useParams } from "react-router-dom";

function Feature() {
    const params = useParams();
    const id=params.id
    return <div className="f">
    {console.log(featuredata[id].imgsrc)}
        <img className='f-img' src={featuredata[id].imgsrc} alt='Image' />
        <p className="f-pt">{featuredata[id].detail}</p> 
    </div>
}

export default Feature;