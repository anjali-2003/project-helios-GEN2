
import React, {useState} from "react";
import featuredata from "../featuredata";
import Card1 from "./Card1";
// import { useParams } from "react-router-dom";

function Feature(props) {
    // const params = useParams();
    const [flag,setflag] = useState(false)
    if(flag===true) {
        return(<Card1 
            id={props.id}   
            img={featuredata[id].imgsrc}
            detail={featuredata[id].detail}
        />)
    }
    const id=props.id
    return <div className="f2" id='akhil' onClick={
        ()=>{
          setflag(true)
        }}>
        <img className='f-img' src={featuredata[id].imgsrc} alt='Image' />
        <p className="f-pt para">{featuredata[id].detail}</p> 
    </div>
}

export default Feature;