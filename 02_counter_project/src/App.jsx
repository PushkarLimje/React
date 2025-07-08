import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'

function App() {

  //useState = hook
  //which is use to change ui/ux in multiple loction on that page 
  
  let [counter, setCounter] = useState(5)
      //variable,function   = change 10 into function output
  
      // let counter = 10

  const addValue = () => {
    setCounter(()=>{
      if (counter<20) {
        return counter +1
      }
      return counter
    })
    // counter = counter + 1
    console.log(counter+1)
  }
  function removeRestrict(){
      if (counter > 0) {
        return counter - 1
      }
       return counter
    }

  const removeValue =()=>{
    setCounter(removeRestrict())
  }

  return (
    <>
      <h1>Pushkar || React</h1>
      <h2>counter value: {counter}</h2>
      <br />
      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
