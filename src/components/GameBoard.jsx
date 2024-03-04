import React from "react";

const GameBoard = (props) => {
  return (
    <ol id="game-board">
      {props.board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnIndex) => (
                <li key={columnIndex}>
                  <button
                    onClick={() => props.onSelectSquare(rowIndex, columnIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
