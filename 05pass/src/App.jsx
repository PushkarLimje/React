import { useState , useCallback, useEffect , useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(function () {   //use to link everthing
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)  str+="0123456789"
    if(charAllowed)  str+="!@#$%^&*-_=+`~(){}[]"

    for (let i = 1; i <= length; i++) {
      let char =  Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)     

    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  //if dependency on [array] change the method  or depend on that method 
  //optimizes

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  },[password])
  // use to copy

  useEffect(()=>{   // use for multiple re-rendering for any change
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
// this [array] is dependency for change in the value so run again 



  return (
  <>
  {/*       w-screen h-screen	==  Makes the parent take full screen width & height
      flex	==  Enables flexbox layout
      items-center==  	Vertically centers children
      justify-center	==  Horizontally centers children
      mx-auto	==  No longer needed with flex centering
 */}
  <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className=" w-full max-w-2xl mx-auto shodow-lg rounded-2xl px-8 my-10 text-orange-500 bg-gray-800" style={{}}>
          <h1 className='text-white text-center px-5 my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-2'>

              <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3 bg-white rounded-full text-shadow-black'
              placeholder='password '
              readOnly
              ref={passwordRef}
              
              />
              <button className='outline-none bg-blue-500 text-shadow-white px-3 py-0.5 shrink-0 rounded-3xl'        
              onClick={copyPasswordToClipboard}              
              >copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>    
            {/* //whitespace == Prevents label text from wrapping to next line */}
              <div className='flex items-center gap-x-2 whitespace-nowrap'>
                <input 
                type="range"
                min={6}
                max={100}
                className='cursor-pointer hover:bg-blue-700 bg-amber-200'
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label htmlFor="">Length :{length}</label>
              </div>

              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setNumberAllowed((prev)=> !prev);
                }}
                />
                <label htmlFor="numberInput"> Numbers</label>
              </div>

              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={()=>{
                  setCharAllowed((prev)=> !prev);
                }}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
                  <button
                    onClick={passwordGenerator}
                    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl"
                  >
                    Generate Password
                  </button>

          </div>
      </div>
    </div>
  </>
  )
}

export default App
