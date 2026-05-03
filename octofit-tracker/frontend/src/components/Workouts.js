import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched workouts:', results);
      });
  }, []);
  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(w => (
          <li key={w.id}>{w.name} - {w.description}</li>
        ))}
      </ul>
    </div>
  );
}
