
import React from "react";

function Card1(props) {
    return <div className="featurealign">
        <img className='feat-img' src={props.img}  alt='MainImage' />
        <p className="feat-pt">{props.detail}<button className="btn btn-link">Read more</button></p>       
    </div>
}

export default Card1;