
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import featuredata from "../featuredata";


function Features() {
    return (

        <div className="feat-pg">
            <h1>Features</h1>

            {featuredata.map((Features) => {
                return (
                    (Features.id) % 2 === 0 ?
                        <Card1
                            id={Features.id}
                            img={Features.imgsrc}
                            detail={Features.detail}
                        /> :
                        <Card2
                            id={Features.id}
                            img={Features.imgsrc}
                            detail={Features.detail}
                        />
                )
            })}
        </div>
    );
}
export default Features;