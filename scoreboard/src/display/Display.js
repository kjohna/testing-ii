import React from 'react';

function Display(props) {
  return (
    <div>
      <h3>Balls</h3>
        <span data-testid="balls-display">
          {props.balls}
        </span>
      <h3>Strikes</h3>
      <span data-testid="strikes-display">
        {props.strikes}
      </span>
    </div>
  );
}

export default Display;