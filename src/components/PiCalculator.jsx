import React, { useState, useContext, useEffect } from "react";
import { MarksContext } from "../context/MarksContext";

const PiCalculator = () => {
  const [iterations, setIterations] = useState(1000);
  const [piEstimate, setPiEstimate] = useState(null);
  const { marks, addMark } = useContext(MarksContext);
  const [currentMark, setCurrentMark] = useState(0);

  useEffect(() => {
    const mark = marks.find((mark) => mark.game === "Pi Calculator");
    if (mark) {
      setCurrentMark(mark.score);
    }
  }, [marks]);

  const calculatePi = () => {
    let insideCircle = 0;
    for (let i = 0; i < iterations; i++) {
      const x = Math.random();
      const y = Math.random();
      if (x * x + y * y <= 1) {
        insideCircle++;
      }
    }
    const pi = (insideCircle / iterations) * 4;
    setPiEstimate(pi);
    addMark("Pi Calculator", 5); // Add 5 marks each time the game is played
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Pi Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Number of Iterations:
        </label>
        <input
          type="number"
          value={iterations}
          onChange={(e) => setIterations(e.target.value)}
          min="1"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={calculatePi}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Calculate Pi
          </button>
        </div>
        {piEstimate && (
          <h2 className="text-2xl font-bold text-gray-700 mt-4">
            Estimated Pi: {piEstimate}
          </h2>
        )}
        <h3 className="text-xl font-bold text-gray-700 mt-4">
          Current Mark: {currentMark}
        </h3>
      </div>
    </div>
  );
};

export default PiCalculator;
