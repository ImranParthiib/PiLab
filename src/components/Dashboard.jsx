import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase/firebaseConfig";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      // Mock data for user marks from Pi games
      setMarks([
        { game: "Pi Calculator", score: 95 },
        { game: "Pi Memorization", score: 88 },
        { game: "Visual Demonstrations", score: 92 },
      ]);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            <div>
              <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Your Pi Game Scores</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Game</th>
                <th className="py-2 px-4 border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {marks.map((mark, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{mark.game}</td>
                  <td className="py-2 px-4 border-b">{mark.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
