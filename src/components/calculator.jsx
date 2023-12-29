import React, { useState } from 'react';

function Calculator() {

  // Define a counter state
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const[sum, setSum] = useState();
  // Function to increase the count and update the state
  
  const styles = {
    myStyle: {color: "red"},
    myTitle: {color: "blue"}
  }
  const updateNum1=(event)=>{
  setNum1(Number(event.target.value));
  }
  function updateNum2(event){
    setNum2(Number(event.target.value));
  }
  function updateSum(){
    setSum(num1+num2);
  }
  
  return (
    <div>
      <h1 style={styles.myTitle}>Calculator</h1>
      num1: <input value={num1} onChange={updateNum1}/>
      num2: <input value={num2} onChange={updateNum2}/>
      <button onClick={updateSum}>sum</button>
      <div>{sum}</div>
    </div>
  );
}

export default Calculator;