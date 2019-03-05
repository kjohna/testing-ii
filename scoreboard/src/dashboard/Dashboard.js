import React from 'react';

function Dashboard(props) {
  return (
    <div>
      <h3>Dashboard</h3>
      <button onClick={props.countStrike}>Count Strike</button>
      <button onClick={props.countBall}>Count Ball</button>
      <button onClick={props.countHit}>Count Hit</button>
    </div>
  );
}

export default Dashboard;