import React, { useRef, useState, useEffect } from "react";

const VisualDemonstrations = () => {
    const canvasRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [insideCircle, setInsideCircle] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [piEstimate, setPiEstimate] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = "black";
        context.strokeRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
        context.stroke();

        points.forEach(point => {
            context.fillStyle = point.inside ? "green" : "red";
            context.fillRect(point.x, point.y, 2, 2);
        });
    }, [points]);

    const addPoint = () => {
        const canvas = canvasRef.current;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const inside = (x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2 <= (canvas.width / 2) ** 2;
        setPoints([...points, { x, y, inside }]);
        setTotalPoints(totalPoints + 1);
        if (inside) {
            setInsideCircle(insideCircle + 1);
        }
        setPiEstimate(((insideCircle + (inside ? 1 : 0)) / (totalPoints + 1)) * 4);
    };

    const reset = () => {
        setPoints([]);
        setInsideCircle(0);
        setTotalPoints(0);
        setPiEstimate(0);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white mb-8">Visual Demonstrations of Pi</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <canvas ref={canvasRef} width={400} height={400} className="border mb-4"></canvas>
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
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-700 mb-2">How It Works</h2>
                    <p className="text-gray-700">
                        Points are randomly generated and checked if they fall inside the circle.
                        The ratio of points inside the circle to the total points, multiplied by 4, estimates Pi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VisualDemonstrations;