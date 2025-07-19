//Typing Writer

import React, { useState, useEffect, useRef } from "react";


function App() {
  
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef(null);
  const [isCorrect, setIsCorrect] = useState(true);


  const sentence = "The "
  
  const checkWord = () => {
  if (input.trim() === sentence.trim()) {
    const endTime = Date.now();
    const timeTakenInMinutes = (endTime - startTime) / 1000 / 60;
    const wordCount = sentence.trim().split(" ").length;
    const calculatedWpm = Math.round(wordCount / timeTakenInMinutes);
    setWpm(calculatedWpm);
    setIsFinished(true);
  } else {
    alert("Input does not match the sentence. Please check for punctuation, spaces, or spelling.");
    console.log("User input:", input.trim());
    console.log("Correct sentence:", sentence.trim());

  }

};

// const handleRestart = () => {
//   setInput("");
//   setStartTime(null);
//   setWpm(null);
//   setIsFinished(false);
//   setIsCorrect(true);
//   inputRef.current.focus();
// };

  return (
   <>
   <div>
      <div class="h-screen w-screen flex items-center justify-center  bg-gray-800">
        <div class="py-10 bg-slate-500 shadow-lg rounded-xl flex items-center justify-center mx-5">
           <div>
              <h1 className="text-black p-5 text-center">Typing Writer </h1>
              <p className="text-yellow-300 p-4 mx-4">{sentence}</p>
              <br />
              <div>
                 <div className="text-nowrap px-10 ">
                    <input 
                    type="text" 
                    className={`rounded-xl h-10 w-96 mx-2 px-6 bg-gray-700 text-white outline-none ${
                                isCorrect ? "border-2 border-green-500" : "border-2  border-red-500"
                    }`}
                    value={input}
                    onChange={(e) => {
                          const value = e.target.value;
                          setInput(value);

                          if (!startTime) {
                            setStartTime(Date.now());
                          }
                        
                          // check if the input matches the corresponding part of the sentence
                          if (sentence.startsWith(value)) {
                            setIsCorrect(true);
                          } else {
                            setIsCorrect(false);
                          }
                          
                        }}
                         onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              checkWord();
                            }
                          }}
                          onCopy={(e) => e.preventDefault()}  //prevent Copy
                          onPaste={(e) => e.preventDefault()} //prevent paste 
                          onCut={(e) => e.preventDefault()}   //prevent cut 
                          onContextMenu={(e) => e.preventDefault()} // disable right click

                    ref={inputRef}
                    disabled={isFinished} 
                     />
                    <button 
                      onClick={checkWord} 
                      className="ml-4 px-4 py-2 bg-green-600 text-white rounded-full mx-2"
                    >
                      Finish
                    </button>
                    {/* <button 
                      onClick={handleRestart} 
                      className="px-4 py-2 bg-red-600 text-white rounded-3xl"
                    >Restart</button> */}
                 </div>
                 <br />
                 <div>
                  <h3 className="px-10 text-black text-2xl text-center">WPM :  {wpm} </h3>
                 </div>
              </div>
           </div>
           
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
