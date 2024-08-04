import PlayerInfo from "./components/PlayerInfo";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
       <ol id="players">
      <PlayerInfo initialName="Player 1" playerSymbol="X"/>
      <PlayerInfo initialName="Player 2" playerSymbol="O"/>
      </ol>
     <GameBoard/>
      </div>
     
    </main>
  );
}

export default App;
