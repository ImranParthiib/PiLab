import React, { useState, useContext, useEffect } from "react";
import { MarksContext } from "../context/MarksContext";

const PiMemorization = () => {
  const piDigits = "3.14159265358979323846264338327950288419716939937510";
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(true);
  const { marks, addMark } = useContext(MarksContext);
  const [currentMark, setCurrentMark] = useState(0);
  const [hint, setHint] = useState("");

  useEffect(() => {
    const mark = marks.find((mark) => mark.game === "Pi Memorization");
    if (mark) {
      setCurrentMark(mark.score);
    }
  }, [marks]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setCorrect(piDigits.startsWith(value));
    if (piDigits.startsWith(value) && value.length === piDigits.length) {
      addMark("Pi Memorization", 5); // Add 5 marks each time the game is played
    }
  };

  const reset = () => {
    setInput("");
    setCorrect(true);
    setHint("");
  };

  const showHint = () => {
    const nextDigit = piDigits[input.length];
    setHint(`The next digit is ${nextDigit}. Try to remember it!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Pi Memorization Tool
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter digits of Pi:
        </label>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            correct ? "border-green-500" : "border-red-500"
          }`}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={showHint}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Hint
          </button>
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
        {hint && <p className="text-gray-700 mt-4">{hint}</p>}
        <p className="text-gray-700 mt-4">
          {correct ? "Keep going!" : "Incorrect, try again!"}
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-4">
          Current Mark: {currentMark}
        </h3>
      </div>
    </div>
  );
};

export default PiMemorization;
