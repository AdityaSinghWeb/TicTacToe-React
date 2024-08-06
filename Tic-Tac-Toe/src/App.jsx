import { useState } from "react";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  const [active, setActive] = useState("X");

  function handleSelect() {
    setActive((currActive) => (currActive === "X" ? "O" : "X"));
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
        <GameBoard onSelect={handleSelect} activeSymbol={active} />
      </div>
    </main>
  );
}

export default App;
