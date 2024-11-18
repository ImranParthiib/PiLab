import React, { useState } from "react";

const PiMemorization = () => {
  // Store Pi digits as a string for easy access
  const piDigits = "3.1415926535897932384626433832795028841971";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);

    // Check if input matches the next digit
    if (e.target.value === piDigits[currentIndex]) {
      setFeedback("Correct!");
      setScore(score + 1);
      setCurrentIndex(currentIndex + 1);
      setUserInput(""); // Reset input
    } else if (e.target.value.length > 0) {
      setFeedback("Try Again!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
        Pi Memorization Tool
      </h1>
      <p className="text-lg mb-4">
        Memorize the digits of Pi. Current Digit:{" "}
        <span className="font-mono text-yellow-400">
          {piDigits.slice(0, currentIndex + 1)}
        </span>
      </p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="px-4 py-2 rounded-lg bg-gray-800 text-gray-50 focus:outline-none border border-gray-600"
        maxLength={1}
        autoFocus
      />
      <p className="mt-4 text-xl">
        {feedback && (
          <span
            className={
              feedback === "Correct!" ? "text-green-400" : "text-red-400"
            }
          >
            {feedback}
          </span>
        )}
      </p>
      <p className="mt-4 text-lg">
        Score: <span className="font-bold text-blue-400">{score}</span>
      </p>
    </div>
  );
};

export default PiMemorization;
