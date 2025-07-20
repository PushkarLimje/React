import React, { useState, useEffect, useRef } from "react";

function App() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRef = useRef(null);

  const sentence =
    "The sun rises in the east every morning. She enjoys reading books in her free time. Birds fly high in the clear blue sky. We should always speak the truth. Learning something new every day keeps the mind sharp.";

  const checkWord = () => {

      const endTime = Date.now();
      const timeTakenInMinutes = (endTime - startTime) / 1000 / 3600;

      const wordCount = input.trim().split(/\s+/).length;
      const calculatedWpm = timeTakenInMinutes > 0
        ? Math.round(wordCount / timeTakenInMinutes)
        : 0;
      setWpm(calculatedWpm);


      // Accuracy logic
      let correctChars = 0;
      const minLen = Math.min(input.length, sentence.length);
      for (let i = 0; i < minLen; i++) {
        if (input[i] === sentence[i]) correctChars++;
      }
      // const totalChars = sentence.length;
      const totalCharsTyped = input.length;
      // const accuracyPercent = Math.round((correctChars / totalCharsTyped) * 100);
      const accuracyPercent = input.length > 0
    ? Math.round((correctChars / input.length) * 100)
    : 0;
      setAccuracy(accuracyPercent);

      setIsFinished(true);
  };

  // Timer logic
  useEffect(() => {
    if (!startTime || isFinished) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsFinished(true);
          checkWord();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, isFinished]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-800">
      <div className="py-10 bg-slate-500 shadow-lg rounded-xl flex items-center justify-center mx-5">
        <div>
          <h1 className="text-black p-5 text-center text-2xl font-bold">
            Typing Writer
          </h1>

          {/* Timer */}
          <h2 className="text-white text-center text-xl">Time Left: {timeLeft}s</h2>

          {/* Sentence with live highlights */}
          <div className="text-yellow-300 p-4 mx-4 break-words w-[500px]">
            {sentence.split("").map((char, idx) => {
              let color = "";
              if (input[idx] === char) {
                color = "text-green-400";
              } else if (input[idx] !== undefined) {
                color = "text-red-400";
              }
              return (
                <span key={idx} className={color}>
                  {char}
                </span>
              );
            })}
          </div>

          {/* Input and buttons */}
          <div className="text-nowrap px-10 mt-4 flex items-center justify-center gap-4">
            <input
              type="text"
              className={`rounded-xl h-10 w-96 px-6 bg-gray-700 text-white outline-none ${
                isCorrect ? "border-2 border-green-500" : "border-2 border-red-500"
              }`}
              value={input}
              onChange={(e) => {
                const value = e.target.value;
                setInput(value);

                if (!startTime) {
                  setStartTime(Date.now());
                }

                setIsCorrect(sentence.startsWith(value));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") checkWord();
              }}
              // onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              ref={inputRef}
              disabled={isFinished}
            />

            <button
              onClick={checkWord}
              className="px-4 py-2 bg-green-600 text-white rounded-full"
            >
              Finish
            </button>
          </div>

          {/* Result display */}
          {isFinished && (
            <div className="text-white text-center mt-6 space-y-2">
              <p className="text-xl">WPM: {wpm ?? "--"}</p>
              <p className="text-xl">Accuracy: {accuracy ?? "--"}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
