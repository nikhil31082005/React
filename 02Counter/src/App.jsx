import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let count = 15;

  function addValue(){
    // counter++;
    setCounter(++counter);
  }

  function subValue(){
    counter--;
    if(counter >= 0){
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <button onClick={subValue}>Decrease value</button>
    </>
  )
}

export default App
