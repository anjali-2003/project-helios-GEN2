
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import featuredata from "../featuredata";
import Row from 'react-bootstrap/Row';


function Features() {
    return (

        <div className="feat-pg">
            <h1 style={{color:"black",fontSize:40,textAlign:"center",marginTop:100,marginBottom:30}}>Features</h1>

            {featuredata.map((Features) => {
                return (
                    (Features.id) % 2 === 0 ?
                    <Row>
                        <Card1
                            id={Features.id}
                            img={Features.imgsrc}
                            detail={Features.detail}
                        /> 
                    </Row>:
                    <Row>
                        <Card2
                            id={Features.id}
                            img={Features.imgsrc}
                            detail={Features.detail}
                        />
                    </Row>
                )
            })}
        </div>
    );
}
export default Features;