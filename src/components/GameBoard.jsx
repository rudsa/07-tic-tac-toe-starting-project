import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, columnIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => {
          return [...innerArray];
        }),
      ];
      updatedBoard[rowIndex][columnIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, columnIndex) => (
                <li key={columnIndex}>
                  <button
                    onClick={() => handleSelectSquare(rowIndex, columnIndex)}
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
