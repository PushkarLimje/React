import { useState , useCallback} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword  ] = useState("")

  const passwordGenerator = ()=>{

  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-lg text-center'>Password Genrator</h1>
        <div className="className='flex shadow rounded-lg overflow-hidden mb-4'">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly
          />
        </div>
      </div>
    </>
  )
}

export default App
