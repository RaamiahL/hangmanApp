import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";
const Popup = ({ correctLetters, worngLetters, selectedWord, setPlayable }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, worngLetters, selectedWord) === "win") {
    finalMessage = "YOU WON!";
    playable = false;
  } else if (checkWin(correctLetters, worngLetters, selectedWord) === "lose") {
    finalMessage = "SORRY YOU LOST!";
    finalMessageRevealWord = `... the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage} </h2>
        <h3>{finalMessageRevealWord} </h3>
        <button>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
