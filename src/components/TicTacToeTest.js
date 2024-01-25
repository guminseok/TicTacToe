import './TicTacToe.css';
import React, { useState } from 'react';

const TicTacToeTest = () => {
  const winner = ()=> {
    const line = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for (let num = 0 ; num < line.length ; num++ ) {
      const [a,b,c] = line[num];
      if (valueList[a] && valueList[a] === valueList[b] && valueList[a] === valueList[c]) {
        return valueList[a];
      }
    }
    return null;
  }

  const [valueList, setValueList] = useState(Array(9).fill(null));
  const [oxText, setOxText] = useState(false);
  const play= winner();

  const getPlayer = () => {
    if (play) {
      return `winner: ${play}` ;
    } else if (valueList.every(p =>p)) {
      return `Draw` ;
    }
    return `Next player: ${oxText ? "X" :"O"}` ;
  }
  const rectangleClick = (i) => {
    if (play || valueList[i]) {
      return;
    }

    const list = valueList.slice();
    list[i] = oxText ? "X" : "O";
    setValueList(list);
    setOxText(!oxText);
  }

  const rectangle = (i) => (
    <div>
      <button className="square" onClick={()=>rectangleClick(i)}>{valueList[i]}</button>
    </div>
  );

  return (
    <div>
      <div className="status">{getPlayer()}</div>
      <div className="board-row">
        {rectangle(0)}
        {rectangle(1)}
        {rectangle(2)}
      </div>
      <div className="board-row">
        {rectangle(3)}
        {rectangle(4)}
        {rectangle(5)}
      </div>
      <div className="board-row">
        {rectangle(6)}
        {rectangle(7)}
        {rectangle(8)}
      </div>
    </div>
  );
}

export default TicTacToeTest;
