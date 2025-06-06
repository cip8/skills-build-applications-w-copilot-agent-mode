import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://friendly-journey-wrrx5v7xjq525rxr-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card p-4">
      <h1 className="mb-4">Teams</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.members && team.members.length ? team.members.map(m => m.username).join(', ') : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3" disabled>Create Team (Coming Soon)</button>
    </div>
  );
}

export default Teams;
