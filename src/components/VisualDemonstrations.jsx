import React, { useRef, useState, useEffect, useContext } from "react";
import { MarksContext } from "../context/MarksContext";

const VisualDemonstrations = () => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [insideCircle, setInsideCircle] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [piEstimate, setPiEstimate] = useState(0);
  const { marks, addMark } = useContext(MarksContext);
  const [currentMark, setCurrentMark] = useState(0);

  useEffect(() => {
    const mark = marks.find((mark) => mark.game === "Visual Demonstrations");
    if (mark) {
      setCurrentMark(mark.score);
    }
  }, [marks]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "black";
    context.strokeRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2,
      0,
      Math.PI * 2
    );
    context.stroke();

    points.forEach((point) => {
      context.fillStyle = point.inside ? "green" : "red";
      context.fillRect(point.x, point.y, 2, 2);
    });
  }, [points]);

  const addPoint = () => {
    const canvas = canvasRef.current;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const inside =
      (x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2 <=
      (canvas.width / 2) ** 2;
    setPoints([...points, { x, y, inside }]);
    setTotalPoints(totalPoints + 1);
    if (inside) {
      setInsideCircle(insideCircle + 1);
    }
    const pi = ((insideCircle + (inside ? 1 : 0)) / (totalPoints + 1)) * 4;
    setPiEstimate(pi);
    addMark("Visual Demonstrations", 5); // Add 5 marks each time the game is played
  };

  const reset = () => {
    setPoints([]);
    setInsideCircle(0);
    setTotalPoints(0);
    setPiEstimate(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Visual Demonstrations of Pi
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="border mb-4"
        ></canvas>
        <div className="flex justify-between mb-4">
          <button
            onClick={addPoint}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Point
          </button>
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
        <p className="text-gray-700">Estimated Pi: {piEstimate.toFixed(6)}</p>
        <p className="text-gray-700">Total Points: {totalPoints}</p>
        <p className="text-gray-700">Points Inside Circle: {insideCircle}</p>
        <h3 className="text-xl font-bold text-gray-700 mt-4">
          Current Mark: {currentMark}
        </h3>
      </div>
    </div>
  );
};

export default VisualDemonstrations;
