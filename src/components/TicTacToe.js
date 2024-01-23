import React, { useState } from 'react';
import Square from './Square';
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

  return(
    <div>
      <div className="status">{getStatus()}</div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default TicTacToe;
