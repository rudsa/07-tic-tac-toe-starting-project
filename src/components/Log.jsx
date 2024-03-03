import React from "react";

const Log = (props) => {
  return (
    <ol id="log">
      {props.turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.column}`}>
          {turn.player} selected {turn.square.row},{turn.square.column}
        </li>
      ))}
    </ol>
  );
};

export default Log;
