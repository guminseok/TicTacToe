import TicTacToe from "./components/TicTacToe";
import TicTacToeTest from "./components/TicTacToeTest";
import TicTacToeDev from "./components/TicTacToeDev";
import './App.css';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <TicTacToe />
        <div>Test</div>
        <TicTacToeTest />
      </div>
      <div>
        <div>勉強するサイトで学習</div>
        <TicTacToeDev />
      </div>
    </div>
  );
}

export default App;
