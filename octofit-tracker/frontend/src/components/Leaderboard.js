import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://friendly-journey-wrrx5v7xjq525rxr-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card p-4">
      <h1 className="mb-4">Leaderboard</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(entry => (
            <tr key={entry._id}>
              <td>{entry.user && entry.user.username ? entry.user.username : 'N/A'}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3" disabled>Refresh (Auto)</button>
    </div>
  );
}

export default Leaderboard;
