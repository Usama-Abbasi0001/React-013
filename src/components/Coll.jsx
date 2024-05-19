import React, { useCallback, useState } from 'react'
import './Coll.css'
function Coll() {
    const [add, setAdd] = useState (0);
    const [minus, setMinus] = useState (100);
  


  return (
    <>
    < div id='Coll'>
      <h1>UseCollBack Hooks</h1>
      <button onClick={() =>setAdd(add + 1)}>Addition {add}</button> 
  
      <br />
      <button onClick={() =>setMinus(minus - 1)}>Substration {minus}</button>
      </div>
    </>
  )
}

export default Coll;
