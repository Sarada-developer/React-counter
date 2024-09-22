import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);

  const addValue = () =>
  {
    // console.log("value added", counter);
    // counter = counter + 1 ;
    setCounter(counter+1);
  }

  const removeValue = () =>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <br/>
      <p>{counter}</p>
    </>
  )
}

export default App
