import React from "react";

function Over({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>Match Draw</p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
}

export default Over;
