import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

const endpoint = `${API_BASE_URL}/api/teams/`;

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched teams:', results);
      });
  }, []);
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title display-6 mb-3">Teams</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(t => (
              <tr key={t.id}>
                <td>{t.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
