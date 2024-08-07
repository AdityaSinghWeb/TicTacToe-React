import { useState } from "react";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winningCombination";
import Over from "./components/Over";
import "./App.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  // const [active, setActive] = useState("X");
  let board = [...initialGameBoard.map(innerArr=>[...innerArr])];
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination = board[combination[0].row][combination[0].colm];
    const secondCombination = board[combination[1].row][combination[1].colm];
    const thirdCombination = board[combination[2].row][combination[2].colm];

    if (
      firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination
    ) {
      winner = firstCombination;
    }
  }

  let draw = gameTurn.length === 9 && !winner;

  const active = getActivePlayer(gameTurn);

  function handleSelect(rowInx, colInx) {
    // setActive((currActive) => (currActive === "X" ? "O" : "X"));
    setGameTurn((prevGameTurn) => {
      const currentPlayer = getActivePlayer(prevGameTurn);

      const updatedTurn = [
        { square: { row: rowInx, col: colInx }, player: currentPlayer },
        ...prevGameTurn,
      ];
      return updatedTurn;
    });
  }

  function handleReset() {
    setGameTurn([]);
  }

  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            initialName="Player 1"
            playerSymbol="X"
            isActive={active === "X"}
          />
          <PlayerInfo
            initialName="Player 2"
            playerSymbol="O"
            isActive={active === "O"}
          />
        </ol>
        {(winner || draw) && <Over winner={winner} onReset={handleReset}/>}
        <GameBoard onSelect={handleSelect} turns={board} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
