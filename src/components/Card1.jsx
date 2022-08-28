
import React from "react";
import { Link } from "react-router-dom";

function Card1(props) {
    return <div className="featurealign">
        <img className='feat-img' src={props.img} alt='MainImage' />
        <p className="feat-pt">{props.detail}
            <Link to={'/' + props.id}>
                <span>...read more</span>
            </Link>
        </p>
    </div>
}

export default Card1;