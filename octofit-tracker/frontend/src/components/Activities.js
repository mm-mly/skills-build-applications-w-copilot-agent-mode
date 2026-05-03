import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      });
  }, []);
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map(a => (
          <li key={a.id}>{a.type} - {a.duration} min - {a.distance} km</li>
        ))}
      </ul>
    </div>
  );
}
