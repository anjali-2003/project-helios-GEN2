
import React , {useState} from "react";
// import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Feature from "./Feature";
import Onpage from "./Onpage";



function Card1(props) {

    const [flag,setflag] = useState(false)
    if(flag===true) {
        return(<Feature id = {props.id}/>)
    }  
    return <Col xs={12} md={6} className="featurealign">
        <div>
        <img className='feat-img' src={props.img} alt='MainImage' />
        <p className="feat-pt para">{props.detail}
            {/* <Link to={'/on/' + props.id}>
                <span>...read more</span>
            </Link> */}
            <span onClick={()=>{
               setflag(true)
            }}>...read more</span>
        </p>
        </div>
    </Col>
}

export default Card1;                