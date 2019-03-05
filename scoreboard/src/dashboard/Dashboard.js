import React from 'react';

function Dashboard(props) {
  return (
    <div>
      <h3>Dashboard</h3>
      <button onClick={props.countStrike}>Count Strike</button>
    </div>
  );
}

export default Dashboard;