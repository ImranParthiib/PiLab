import React, { useState, useEffect } from "react";

const PiCalculator = () => {
  const [iterations, setIterations] = useState(1000);
  const [piEstimate, setPiEstimate] = useState(null);
  const [running, setRunning] = useState(false);
  const [currentIteration, setCurrentIteration] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        calculatePi(currentIteration);
        setCurrentIteration((prev) => prev + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running, currentIteration]);

  const calculatePi = (iteration) => {
    let pi = 0;
    for (let i = 0; i <= iteration; i++) {
      pi += (i % 2 === 0 ? 1 : -1) / (2 * i + 1);
    }
    pi *= 4;
    setPiEstimate(pi);
  };

  const startCalculation = () => {
    setRunning(true);
  };

  const stopCalculation = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setPiEstimate(null);
    setCurrentIteration(0);
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
            onClick={startCalculation}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Start
          </button>
          <button
            onClick={stopCalculation}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
        {piEstimate && (
          <h2 className="text-2xl font-bold text-gray-700 mt-4">
            Estimated Pi: {piEstimate.toFixed(6)}
          </h2>
        )}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">How It Works</h2>
        <p className="text-gray-700">
          This Pi calculator uses the Leibniz formula to estimate the value of Pi. The formula is:
          <br />
          <code className="block mt-2 mb-2 text-center">π = 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - ...)</code>
          The method involves summing a series of fractions with alternating signs. The more iterations you perform, the closer the estimate will be to the actual value of Pi.
        </p>
      </div>
    </div>
  );
};

export default PiCalculator;