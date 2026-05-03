import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setEntries(results);
        console.log('Fetched leaderboard:', results);
      });
  }, []);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {entries.map(e => (
          <li key={e.id}>{e.user?.username || e.user} - {e.points} pts</li>
        ))}
      </ul>
    </div>
  );
}
