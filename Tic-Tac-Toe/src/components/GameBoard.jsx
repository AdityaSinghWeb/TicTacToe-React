import React from "react";
// import { useState } from "react";

function GameBoard({ onSelect, turns }) {
  // const [game, setGame] = useState(initialGameBoard);

  // function handleClick(rowInx, colInx) {
  //   setGame((prevGame) => {
  //     const updatedGame = [...prevGame.map((innerArry) => [...innerArry])];
  //     updatedGame[rowInx][colInx] = activeSymbol;
  //     return updatedGame;
  //   });
  //   onSelect();
  // }
  return (
    <ol id="game-board">
      {turns.map((el, rowInx) => (
        <li key={rowInx}>
          <ol>
            {el.map((symbol, colInx) => (
              <li key={colInx}>
                <button
                  onClick={() => onSelect(rowInx, colInx)}
                  disabled={symbol}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
