import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {

  const winner = null;

  const getStatus = () => {
    if(winner) {
      return "X"
    } else if (winner == "a"){
      return "Y"
    } else {
      return "Next player: ";
    }
  };

  const renderSquare = (i) => (
    <div>
      <button className="square">
      </button>
    </div>
  );

  return(
    <div>
      <div className="status">{getStatus()}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default TicTacToe;
