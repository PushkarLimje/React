import React ,{ useState } from 'react'
import './App.css'
import tailwindConfig from '../tailwind.config'
import Card from './components/card'



function App() {
  const [count , setCount ] = useState(0)
  return (
  <>
    <h1 className='bg-blue-300  text-black rounded-se-full p-48 '>hello</h1>
    <br />
    <Card username ="pushkar limje" field = "senior software engineer " email ="pushkarL@gpt.ai" number ="9514646"/>
    <br />
    <Card username ="manjiri "  email ="manjiriS@gpt.ai" number ="846461649"/>
    
  </>
  )
}

export default App
