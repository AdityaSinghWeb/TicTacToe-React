import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((el, rowInx) => (
        <li key={rowInx}>
          <ol>
            {el.map((symbol, colInx) => (
              <li key={colInx}>
                <button>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
