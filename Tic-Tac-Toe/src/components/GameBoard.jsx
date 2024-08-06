import React from "react";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard({ onSelect, activeSymbol }) {
  const [game, setGame] = useState(initialGameBoard);

  function handleClick(rowInx, colInx) {
    setGame((prevGame) => {
      const updatedGame = [...prevGame.map((innerArry) => [...innerArry])];
      updatedGame[rowInx][colInx] = activeSymbol;
      return updatedGame;
    });
    onSelect();
  }

  return (
    <ol id="game-board">
      {game.map((el, rowInx) => (
        <li key={rowInx}>
          <ol>
            {el.map((symbol, colInx) => (
              <li key={colInx}>
                <button onClick={() => handleClick(rowInx, colInx)}>
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
