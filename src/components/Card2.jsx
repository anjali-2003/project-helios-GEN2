
import React from "react";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

function Card2(props) {
    return <Col xs={12} md={6} className="featurealign">
    <img className='ft-img' src={props.img} alt='MainImage' />
    <p className="ft-pt para">{props.detail}
        <Link to={'/on/' + props.id}>
            <span>...read more</span>
        </Link>
    </p>
</Col>
}

export default Card2;