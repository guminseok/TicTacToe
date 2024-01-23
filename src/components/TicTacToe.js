import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  //勝利条件追加
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const getStatus = () => {
    if(winner) {
      return "X"
    } else if (winner == "a"){
      return "Y"
    } else {
      return "Next player: ";
    }
  };

  const handleClick = (i) => {
    //squares[i]は１回押下したボタンの値を改めて押下して変わらないようにする
    //winnerは誰か勝利すると押下出来ないようにする
    if (winner || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i]= xIsNext ? 'X' : 'O';
    setSquares(newSquares)
    setXIsNext(!xIsNext)//押下するとX、Oに変更できるように
  }
  const Square = ({value,onClick}) => (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );

  const reset = () => {
    setSquares(Array(9).fill(null));
  }

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={()=>handleClick(i)}
    />
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
        <button onClick={()=>reset()}>reset</button>
      </div>
    </div>
  );
}

export default TicTacToe;
