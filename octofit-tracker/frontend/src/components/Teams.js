import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

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
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(t => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}
