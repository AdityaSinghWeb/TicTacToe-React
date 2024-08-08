import React from "react";
import { useState } from "react";

function PlayerInfo({ initialName, playerSymbol, isActive, winnerPlayer }) {
  const [editing, setEditing] = useState(false);
  const [changeName, setChangeName] = useState(initialName);

  function handleClick() {
    setEditing((wasEdit) => !wasEdit);

    if (editing) {
      winnerPlayer(playerSymbol, changeName);
    }
  }

  function handleChange(event) {
    setChangeName(event.target.value);
  }

  let name = <span className="player-name">{changeName}</span>;

  if (editing) {
    name = (
      <input type="text" required value={changeName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {name}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button className={isActive ? "active" : undefined} onClick={handleClick}>
        {editing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default PlayerInfo;
