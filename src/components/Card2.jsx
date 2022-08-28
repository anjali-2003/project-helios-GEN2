
import React from "react";
import { Link } from "react-router-dom";

function Card2(props) {
    return <div className="featurealign">
    <img className='ft-img' src={props.img} alt='MainImage' />
    <p className="ft-pt">{props.detail}
        <Link to={'/' + props.id}>
            <span>...read more</span>
        </Link>
    </p>
</div>
}

export default Card2;