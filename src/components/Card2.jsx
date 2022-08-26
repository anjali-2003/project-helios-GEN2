
import React from "react";

function Card2(props) {
    return <div className="featurealign">
        <img className='ft-img' src={props.img}  alt='MainImage' />
        <p className="ft-pt">{props.detail}</p>       
    </div>
}

export default Card2;