import React, {useState} from 'react';

let x=false;

function Buttons(){

  let [clicked,handleClick] = useState(false) ;

  function click(){
    handleClick(true);
    x={clicked};
    alert("on")
  };

  return (
    <div className="btn row">
      <button className="btn-off">OFF</button>
      <button onClick={click} className="btn-on"> ON </button>
    </div>
  );
}

export default Buttons;
export {x};