import React, { useMemo, useState } from 'react'
import './Memo.css';
function Memo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const hayoo = useMemo (  function multiply(){
    console.log("Abbasi***********")
    return add*10;
  },[add])
    return (
    <div id='memo'>
      <h1>UseMemo Hooks</h1>
      {hayoo} <br />
      <button onClick={() =>setAdd(add + 1)}>Addition {add}</button> 
  
      <br />
      <button onClick={() =>setMinus(minus - 1)}>Substration {minus}</button>
  
    </div>
  );
}

export default Memo;
